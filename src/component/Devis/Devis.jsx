import {Grid,Typography,Container} from '@mui/material'
import FormDevis from './FormDevis'

const Devis = () => {

    return(
        <>
        <Container sx={{mt:6}}>
            {/* {title} */}
            <Typography 
                    gutterBottom
                    variant='h5' 
                    component="h1" 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent:'center',
                        fontWeight:'bold'
                        }}>Nos Devis
            </Typography>
            {/* {subtitle} */}
            <Typography 
                    variant='body-2' 
                    component="p" 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent:'center',
                        fontWeight:'bold'
                        
                        }}>Lorem ipsum dorem lortem Lorem ipsum dolor sit, 
            </Typography>
            {/* {paragraph 1} */}
            <Grid container spacing={3}>
                <Grid item md={7} sm={6}  sx={{mt: 8}}>
                    <Typography 
                        gutterBottom
                        variant="body-2"
                        component="h2"
                    >
                        Lorem ipsum dolor sit amet consectetur 
                    </Typography>
                    <Typography 
                        gutterBottom
                        variant="body-3"
                        component="p"
                    >
                        Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur
                         adipisicing elit. Nesciunt adipisci praesentium aperiam amet numquam rep
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vel porro architecto corporis voluptas distinctio, magni molestias ad possimus mollitia eum iure
                         beatae eaque odio quo, eveniet dolor sint. Distinctio.
                    </Typography>

                    {/* {paragraph 2} */}

                    <div style={{marginTop : '20px'}}>

                    
                    <Typography 
                        gutterBottom
                        variant="body-2"
                        component="h2"
                    >
                        Lorem ipsum dolor sit amet consectetur 
                    </Typography>
                    <Typography 
                        gutterBottom
                        variant="body-3"
                        component="p"
                    >
                        Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci praesentium aperiam amet numquam rep
                    </Typography>

                    </div>

                </Grid>
                <Grid item md={5}  sm={6}>
                    <FormDevis/>

                </Grid>

            </Grid>

                

        </Container>
            
        </>
    )

}
export default Devis