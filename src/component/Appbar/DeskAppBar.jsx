import {AppBar,Toolbar,Typography} from '@mui/material'
//import MenuIcon from '@mui/icons-material/Menu';
import {AppBarItem} from './style'

const DeskAppBar = () => {

    return(
        <>
         <AppBar position="fixed" sx={{p:1 ,maxWidth: 'auto'}} >
                <Toolbar variant="dense">
                    
                        <Typography variant="h6" color="inherit" component="div">
                            Photos
                    </Typography>
                    

                    <AppBarItem sx={{p:1}}>
                        
                            <Typography variant="h6" sx={{ml:3}}>Home</Typography>
                            <Typography variant="h6"sx={{ml:3}}>Services </Typography>
                            <Typography variant="h6" sx={{ml:3}}>Contact</Typography>
                        
                        
                    </AppBarItem>
    
    
                </Toolbar>
               
            </AppBar>
        </>
    )

}

export default DeskAppBar 