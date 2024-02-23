import React,{useState} from 'react'
import {Box,Menu,IconButton,Typography,MenuItem} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'
import { MobileNavContainer } from './style';
const MobileAppBar = () => {

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return(
            <MobileNavContainer position="relative">
                
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>

                    {/* Menu triple bar */}
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx={{ color:'#fff' }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" sx={{my:2,display:'flex',alignItems:'center',justifyContent:'center', color:'#fff'}}>
                    Photos
                    </Typography>

                    {/* ABOUT, PROJECTS, CONTACT - small screen */}
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    
                        <MenuItem  onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" onClick={goHome} >Home</Typography>
                        </MenuItem>
                        <MenuItem  onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" >Services</Typography>
                        </MenuItem>
                        <MenuItem  onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" >Contact</Typography>
                        </MenuItem>
                    
                    </Menu>
                    </Box>
            </MobileNavContainer>
        
        
    )

}

export default MobileAppBar 