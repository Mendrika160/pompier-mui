import {Typography} from '@mui/material'
import { DeskNavBarContainer } from './style'
import {NavigationItem} from './style'
import {useNavigate} from 'react-router-dom'

const DeskAppBar = () => {
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    return(
        
         <DeskNavBarContainer>
                    <Typography variant="h6" color="inherit" component="div" sx={{ color:'#fff' }}>
                            Photos
                    </Typography>
                    <NavigationItem sx={{p:1}}>
                            <Typography variant="h6"sx={{ml:3}} onClick={goHome}>Home</Typography>
                            <Typography variant="h6"sx={{ml:3}} >Services </Typography>
                            <Typography variant="h6" sx={{ml:3}}>Contact</Typography>
                        
                        
                    </NavigationItem>
            </DeskNavBarContainer>
        
    )

}

export default DeskAppBar 