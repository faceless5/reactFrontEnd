import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Products from '../Products'
import { Typography, Container, FormControlLabel, Checkbox, Box, Radio, RadioGroup, Link} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { HomeRepairServiceOutlined, Star } from '@mui/icons-material'
// import {StarIcon, StarBorderIcon} from '@mui/icons-material'

const Productspage = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Typography variant='h4' color='secondary' pl={5} pt={5}>Departments</Typography>
                        <Box pl={5} pt={5}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="Computers" />
                            <br />
                            <Checkbox id="checkbox2" />
                            <label htmlFor='checkbox2'>Mobiles</label>
                            <br />
                            <FormControlLabel control={<Checkbox />} label="Cameras" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="Fitness" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="Beauty" />
                        </Box>

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

<Star/>

                    </div>
                    <div className='col-md-9'>
                        <Products />
                        <Products />
                    </div>
                </div>
            </Container>


            <Footer />

        </>
    )
}

export default Productspage