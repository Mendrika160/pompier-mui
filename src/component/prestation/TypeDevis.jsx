import React from 'react'
import {Card,CardContent,Typography,Grid} from '@mui/material'
import {DevisCard,PriceDevis} from './style'

const TypeDevis = ({title,price}) => {
  return (
    <>  
        
        <Card sx={{height: '40px',mb:2}}>
            <DevisCard>
                <Grid container spacing={2}>
                    <Grid item xs={9} sm={9} md={9} >
                        
                        <Typography variant="body-2" component="p">{title} </Typography>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} >
                    <PriceDevis>
                        <Typography 
                            variant="body-2" 
                            component="p"
                            sx={{
                              ml:1
                            }}
                        >{price}
                        </Typography>
                    </PriceDevis>
                    </Grid>
                </Grid>
            </DevisCard>
        </Card>
        
    </>
  )
}

export default TypeDevis