import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Products from '../Products'
import { Typography, Container, FormControlLabel, Checkbox, Box, Radio, RadioGroup, Link} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { HomeRepairServiceOutlined, Star } from '@mui/icons-material'
import Checkbox_category from '../Checkbox_category'
// import {StarIcon, StarBorderIcon} from '@mui/icons-material'

const Productspage = () => {
    const [sortBy, setSortBy] = useState('createdAt')
    const [order, setOrder] = useState('1')
    const [limit, setLimit] = useState(8)
    const [skip, setSkip] = useState(0)

    const [filteredProduct, setFilteredProduct] = useState([])
    const [size, setSize] = useState(0)


    const [myFilters, setMyFilters] = useState({
        filters: {category:[], product_price:[]}
    })

    const handleFilters = (filters,filterBy) =>{
        const newFilter = {...myFilters}
        newFilter.filters[filterBy] = filters
        // category: mobile_id -> filters: mobile_id, filterBy:category
        // price: price_id -> filters: price_id, filterBy:price
        if(filterBy === 'product_price'){
            newFilter.filters[filterBy] = handlePrice(filters)
        }
        setMyFilters(newFilter)
        
        
    }
    const handlePrice =(index) =>{
        const data = prices
        const price = data.find(price=>price.id===index)
        return price.value
    }
    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Checkbox_category handleFilters={handleFilters}/>
                        <RadioGroup/>
{/* 
                        <Typography variant='h4' color='secondary' mt={5} pl={5} pt={5}>Prices</Typography>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="other"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="other" control={<Radio />} label="Below $ 25" /><br />
                            <FormControlLabel value="other1" control={<Radio />} label=" $ 25 - $ 100" /><br />
                            <FormControlLabel value="other2" control={<Radio />} label="$ 100 - $ 500" /><br />
                            <FormControlLabel value="other3" control={<Radio />} label="$ 500 - $ 1000" /><br />
                            <FormControlLabel value="other4" control={<Radio />} label="Above $ 1000" /><br />
                        </RadioGroup>


                        <Typography variant='h4' color='secondary' mt={5} pl={5} pt={5}>Discount</Typography>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="other"
                            name="radio-buttons-group2"
                        >
                            <FormControlLabel value="discount" control={<Radio />} label="Upto 5%" /><br />
                            <FormControlLabel value="discount1" control={<Radio />} label="Upto 10%" /><br />
                            <FormControlLabel value="discount2" control={<Radio />} label="Upto 25% " /><br />
                            <FormControlLabel value="discount3" control={<Radio />} label="Upto 50%" /><br />
                            <FormControlLabel value="discount4" control={<Radio />} label="Above 50%" /><br />
                        </RadioGroup>

                        <Typography variant='h4' color='secondary' mt={5} pl={5} pt={5}>Deals</Typography>
                        <Link component="button" variant="h5" underline = 'none' sx={{color: "rgb(255,0,0)"}} >
                            Deals of the day
                        </Link><br/>
                        <Link component="button" variant="h5" color='primary' underline='always' >
                            Flash Deals
                        </Link><br/>
                        <Link component="button" variant="h5" underline='hover' >
                            Most Popular
                        </Link><br/>

                        <Typography variant='h6' color='secondary' mt={5} pl={5} pt={5}>Avg. customer review</Typography>
                        <StarIcon className='text-primary'/><StarIcon/><StarIcon/><StarIcon/><StarIcon/><br/>
                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><br/>
                        <StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/><br/>
                        <StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><br/>
                        <StarIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><br/>

<Star/> */}

                    </div>
                    <div className='col-md-9'>
                    <div className='container mx-auto mt-5'>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                        <Products />
                        </div>
                        </div>
                    </div>
                </div>
            </Container>


            <Footer />

        </>
    )
}

export default Productspage