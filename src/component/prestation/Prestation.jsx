import React from 'react'
import {Typography,Grid, Card,CardContent,Button, CardMedia,CardActions} from '@mui/material'
import {PrestationContainer,PrestationDetails} from './style'
import { useParams } from 'react-router-dom'
import Img from '../../assets/img/banners-homepage.png'

const Prestation = () => {
  const params = useParams();
  console.log('param',params)
  return (
    <>
    <PrestationContainer sx={{mt: 4}} maxWidth='md'>
      <Grid container spacing={4}>
        <Grid  item md={8} xs={12}>
          <PrestationDetails>
          <Typography variant='h5' component='h1' sx={{mb:3,fontWeight:'bold'}}> PRESTATION {params.id} </Typography>
          <div>
            {/* {image details} */}
          <CardMedia
              component="img"
              height="340"
              width="30px"
              image={Img}
              alt="green iguana"
              sx={{mb:3}}
                                />
          </div>

          <Typography 
              variant='h6' 
              component='h3' 
              sx={{my:3,fontWeight:'bold'}}
            > 
            Prestation {params.id} 
          </Typography>
          <Typography 
              variant="body-2" 
              component="p" 
              sx={{mb:3}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dignissimos possimus repudiandae minima distinctio repellendus quae eius, harum odio assumenda modi
               consequatur aperiam excepturi rerum quibusdam optio sequi provident delectus necessitatibus.

              </Typography>
              <Typography 
              variant="body-2" 
              component="p" 
              sx={{mb:3}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dignissimos possimus repudiandae minima distinctio repellendus quae eius, harum odio assumenda modi
               consequatur aperiam excepturi rerum quibusdam optio sequi provident delectus necessitatibus.

              </Typography>

              <Card  sx={{ backgroundColor:'#ffcab0',opacity: '0.7',my:3,border:'no-border'}}>
                            
                            <CardContent sx={{p:2,m:2}}>
                                                
                                <Typography 
                                    gutterBottom   
                                    variant="h5" 
                                    component="div"
                                    sx={{display:'flex',alignItems:'center',justifyContent:'center',pr:3}}
                                  >
                                      Icon
                                  </Typography>
                                  <Typography
                                    gutterBottom 
                                    variant="body-2" 
                                    component="p" 
                                    sx={{mb:3,color:'#ff6f3c'}}
                
                                  >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Dignissimos possimus repudiandae minima distinctio repellendus quae eius, harum odio assumenda modi
                                    consequatur aperiam excepturi rerum quibusdam optio sequi provident delectus necessitatibus.
                
                                    </Typography>
                
                                  </CardContent>
                                  
                                  <CardActions
                                      sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
                                  >
                                  <Button 
                                      variant="contained"
                                      sx={{backgroundColor: 'red',fontWeight: 'bold'}}
                                      
                                      
                                    >038 45 678 90</Button>
                                  </CardActions>
                                        
                        </Card>
          </PrestationDetails>
        </Grid>
        <Grid item md={4}>
        <Card  sx={{ maxWidth: 345 }}>
                            
            <CardContent>
                                
                <Typography 
                    gutterBottom   
                    variant="h5" 
                    component="div"
                    sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
                  >
                      Lizard morena
                  </Typography>
                  <Typography
                    gutterBottom 
                    variant="body-2" 
                    component="p" 
                    sx={{mb:3}}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dignissimos possimus repudiandae minima distinctio repellendus quae eius, harum odio assumenda modi
                    consequatur aperiam excepturi rerum quibusdam optio sequi provident delectus necessitatibus.

                    </Typography>

                          </CardContent>
                            <CardActions
                                sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
                            >
                            <Button 
                                variant="contained"
                                
                              >Voir prestation</Button>
                        </CardActions>
                        
        </Card>

        <Card  sx={{ maxWidth: 345 ,backgroundColor:'#ffcab0',opacity: '0.7',my:3,border:'no-border'}}>
                            
            <CardContent sx={{display: 'flex',p:2,m:2}}>
                                
                <Typography 
                    gutterBottom   
                    variant="h5" 
                    component="div"
                    sx={{display:'flex',alignItems:'center',justifyContent:'center',pb:40,pr:3}}
                  >
                      Icon
                  </Typography>
                  <Typography
                    gutterBottom 
                    variant="body-2" 
                    component="p" 
                    sx={{mb:3,color:'#ff6f3c'}}

                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dignissimos possimus repudiandae minima distinctio repellendus quae eius, harum odio assumenda modi
                    consequatur aperiam excepturi rerum quibusdam optio sequi provident delectus necessitatibus.

                    </Typography>

                  </CardContent>
            
                        
        </Card>

        <Card  sx={{ maxWidth: 345 ,backgroundColor:'#ffebbb',opacity: '0.7',my:3,border:'no-border'}}>
                            
            <CardContent sx={{display: 'flex',p:2,m:2}}>
                                
                <Typography 
                    gutterBottom   
                    variant="h5" 
                    component="div"
                    sx={{display:'flex',alignItems:'center',justifyContent:'center',pb:40,pr:3}}
                  >
                      Icon
                  </Typography>
                  <Typography
                    gutterBottom 
                    variant="body-2" 
                    component="p" 
                    sx={{mb:3,color:'#ffc93c'}}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dignissimos possimus repudiandae minima distinctio repellendus quae eius, harum odio assumenda modi
                    consequatur aperiam excepturi rerum quibusdam optio sequi provident delectus necessitatibus.

                    </Typography>

            </CardContent>
            
                        
        </Card>

        </Grid>

      </Grid>
      </PrestationContainer>
    </>
  )
}

export default Prestation