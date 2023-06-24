import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { viewCategories } from '../API/categoryAPI'

const Checkbox_category = () => {
    const [categories, setCategories] = useState([])
    const [checked, setChecked] =useState([])

    const handleChange =(e) =>{
        const new_checked_categories = [...checked]
        const new_category= e.target.value
        // check if new_category is already in checked_categories
        const index = new_checked_categories.findIndex(category=>category===new_category)
        // if found returns index, else returns -1
        if(index === -1){
            new_checked_categories.push(new_category)
        }
        else{
            setChecked(new_checked_categories)
            new_checked_categories.splice(index,1)
        }
    }

    useEffect(()=>{
        viewCategories()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setCategories(data)
            }
        })
        .catch(err=>console.log(err))
    },[])

  return (
    <>
        <Typography variant='h4' color='secondary' pl={5} pt={5}>Departments</Typography>
                        <Box pl={5} pt={5} textAlign={'left'}>
            
            {
                categories.map(category => {
                    return <>
                    <FormControlLabel control={<Checkbox/>} label=
                    {category.category_name} value={category._id} onChange={handleChange}/>
                    <br />
                    </>
                })
            }
                        </Box>
    </>
  )
}

export default Checkbox_category