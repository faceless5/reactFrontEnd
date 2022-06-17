import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Contact = () => {
  return (
    <>
       <Navbar/>
       <Container maxWidth='xl'>
           <Typography variant='h4' align='center'>
               Contacts
           </Typography>
           <Box className="contact-container" display='flex'>
               <Box className = 'contact-address' width='50%' padding={5}>
                   <Paper elevation={5} sx={{padding:"25px"}}>
                        <Typography variant='h4'>Our Store Pvt. Ltd.</Typography>
                        <Typography variant='h5'>Kathmandu, Nepal</Typography>
                        <Typography variant='h6'>Phone: 01-5905441,</Typography>
                        <Typography variant='h6'>Email: info@ourstore.com.np</Typography>
                        <Typography variant='h6'>Website: www.ourstore.com</Typography>
                   </Paper>
               </Box>
               <Box className = 'contact-form' width='50%' padding={5}>
               <Paper elevation={5} sx={{padding:"25px"}}>
                   <Typography variant="h5" align='center'>Contact Form</Typography>
                   <hr/>
                   <TextField label='Email' variant='outlined' fullWidth='true' helperText='enter your email here' margin='dense' multiline size='small' rows={1}></TextField>
                   <TextField label='Subject' variant='outlined' fullWidth='true' helperText='subject' margin='dense'  multiline rows={1} />
                   
                   <TextField label='Body' variant='outlined' fullWidth='true'  margin='dense' multiline rows={3}/>
<br/>
                   <Button variant='contained' mt={3} fullWidth='true'>Submit</Button>

                   
                </Paper>
               </Box>
           </Box>
           <Box className = 'contact-map mx-auto' width={'70%'}  align='center' >
            <Paper elevation={5}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240403142384!2d85.31271265024449!3d27.709862782706416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1650939143922!5m2!1sen!2snp" height={'450px'} width={'100%'} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Paper>
           </Box>
       </Container>
       <Footer/> 
    </>
  )
}

export default Contact