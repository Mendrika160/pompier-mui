import React,{useState} from 'react'
import {Box,Menu,AppBar,Toolbar,IconButton,Typography,MenuItem} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const MobileAppBar = () => {

    const pages = [ "Home","Services","Contact"]
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return(
        <>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>

                    {/* Menu triple bar */}
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" sx={{my:2,display:'flex',alignItems:'center',justifyContent:'center'}}>
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
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                </Toolbar>
            </AppBar>
        
        </>
    )

}

export default MobileAppBar 