import { Scale } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Blogs = () => {
  return (
    <>
    <Navbar/>
        <Typography variant='h3' align='center' padding={5}>Blogs</Typography>
        <Container maxWidth='xl' padding={4}>
            <Box className='Blog' display={'flex'} sx={{
                backgroundColor:'rgba(255,255,0,10%)',
                '&:hover': {
                    backgroundColor: 'rgba(255,255,0,20%)',
                    
                  }}
            }>
                <Box className = 'Blog-content' width={'75%'} p={5}>
                    <Box className = 'Blog-title'>
                        <Typography variant='h4' fontWeight={'bold'}>
                        Blog Title
                        </Typography>
                        <hr/>
                        </Box>
                    <Box className = 'Blog-text'>
                        <Typography variant='body1' align='justify' >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae commodi at debitis. Cum, id in earum expedita doloribus quos molestiae architecto nisi, quas, nobis voluptate possimus consequatur dolores fugiat explicabo a doloremque pariatur necessitatibus. Libero vero quae exercitationem, asperiores, aliquam porro explicabo beatae necessitatibus illo laborum ipsum iusto perspiciatis eius possimus quaerat deserunt. Exercitationem dignissimos minima, blanditiis velit laboriosam neque ipsa quis. Doloremque, distinctio. Facilis, aut commodi at amet assumenda laboriosam, a sit saepe corporis magnam reprehenderit sint obcaecati itaque eligendi aliquid quaerat quo vitae iste quidem distinctio! Ipsum animi cum porro similique magnam obcaecati odio ullam eveniet dolor illo maxime ab, aspernatur delectus dignissimos odit earum ipsa et tempora cupiditate, natus vel, fugit pariatur dolores optio. Nesciunt assumenda inventore quis, voluptatum debitis nostrum recusandae quos molestias consectetur perspiciatis odio reprehenderit laudantium eius at corporis laborum modi sint a? Facilis veritatis ea voluptate voluptatum blanditiis eveniet debitis neque ab non! Atque corrupti quo veritatis unde laboriosam dolorum eius aperiam, totam quis eveniet recusandae nemo facilis, molestias sed dolorem iste ab consequuntur ad fugit doloremque quasi consectetur ex numquam! Eveniet quaerat modi doloribus, exercitationem laboriosam laudantium temporibus eaque ipsam praesentium quae totam magnam mollitia maxime nostrum accusamus? Incidunt ipsum ratione suscipit.
                    </Typography>
                    </Box>
                </Box>
                <Box className = 'Blogger-info' width={'25%'} p={5}>
                    <Box className = 'Blogger-image' width={'100%'} borderRadius={'50%'} overflow={'hidden'} backgroundColor={"green"}>
                        <img src='./images/img1.png' width={'100%'}
                        sx={{
                            transition:'2s',
                            '&:hover':{
                            }
                        }}
                        />
                    </Box>
                    <Box className = 'Blogger-name'>
                        <Typography variant='h5' align='right' fontWeight='bold'>-Blogger</Typography>
                        </Box>
                </Box>
            </Box>
        </Container>



    <Footer/>
        
    </>
  )
}

export default Blogs