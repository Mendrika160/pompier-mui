import React from 'react'
import {Typography,Grid, Card,CardContent,Button,CardActions} from '@mui/material'
import {PrestationContainer,DevisList} from './style'
import AlertInfo from './AlertInfo'
import TypeDevis from './TypeDevis'
import PrestationList from './PrestationList'
import PresentionItem from './PresentationItem'
import VilleIntervention from './VilleIntervention'
import Foire from '../FAQ/Foire'

const devis = [ 
    {
      "id": 1,
      "title": "gratuis",
      "price":"$ 0"
    },
    {
      "id":2,
      "title": "Example 2",
      "price":"$ 100"
    },
    {
      "id":3,
      "title": "Exmple 3",
      "price":"$ 300"
    },

]

const Prestation = () => {
  //const params = useParams();
  //console.log('param',params)

  return (
    <>
    <PrestationContainer sx={{mt: 4}} maxWidth='md'>
      <Grid container spacing={4}>
        <Grid  item md={8} xs={12}>
          <PresentionItem />
        </Grid>

        <Grid item md={4}>
        <Card>
                            
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
                {/* typedevis */}
                <DevisList>
                  {devis.map(devi => (
                      <TypeDevis key={devi.id} title={devi.title} price={devi.price}/>
                  ))}
                  
                </DevisList>

            </CardContent>
                <CardActions
                    sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
                >
                  <Button 
                    variant="contained"
                                  
                  >Demander Devis
                  </Button>
                </CardActions>
                        
        </Card>

          {/* {alert info} */}
          <AlertInfo  severity="error"/>
        

        

        </Grid>

      </Grid>
        <PrestationList />
        <VilleIntervention />
      </PrestationContainer> 
      <Foire />
    </>
  )
}

export default Prestation