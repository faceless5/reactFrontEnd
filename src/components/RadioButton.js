import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import {prices} from './prices'

export const RadioButton = () => {
    const handleChange =(e) =>{
        console.log(e.target.value)
    }
  return (
    <>
         <Typography variant='h4' color='secondary' mt={5} pl={5} pt={5}>Prices</Typography>

    <RadioGroup
         aria-labelledby="demo-radio-buttons-group-label"
         defaultValue="other"
         name="radio-buttons-group">

            {
                prices.map(price=> {
                    return
                    <FormControlLabel key={price.id} value={price.id}
                     control={<Radio/>} label={price.name} onChange={handleChange} />
                })
            }
        </RadioGroup>
    </>
  )
}
