import {Container,Box,Typography,Button,Grid,TextField,FormControlLabel,Checkbox, TextareaAutosize} from '@mui/material'

const FormDevis = () => {

    return(
        <>
            <Container component="main" maxWidth="xs">
        
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            
            <Box component="form" noValidate  sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="Phone"
                    label="Phone number"
                    name="phone"
                    autoComplete="off"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextareaAutosize 
                        placeholder='Decrire ici...'
                        style={
                            {width:'100%',height:'100px'}
                        }/>
            
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Rappelez."
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,textTransform: 'none'}}
                >
                Envoyer Demande
                </Button>
                <Grid container justifyContent="flex-end">
                
                </Grid>
            </Box>
            </Box>
            
      </Container>
        </>
    )

}
export default FormDevis