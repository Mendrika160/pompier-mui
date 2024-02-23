import React from 'react'
import {Button} from '@mui/material'
import {NavInfoContainer,SocialProvider} from './style'
import {Facebook,Instagram} from '@mui/icons-material'

const NavInfo = () => {
  return (
    <NavInfoContainer>
        <SocialProvider>
          <Button 
            variant='outlined' 
            sx={{justifyContent:'flex-end',backgroundColor:'#fff', mr:6,'&:hover': {backgroundColor:'#fff'}}}
        >0334556677
        </Button>
            <Facebook sx={{color:'white',mt:1,mr:6}}/>
            <Instagram sx={{color:'white',mt:1,mr:6}} /> 
            
        </SocialProvider>
    </NavInfoContainer>
  )
}

export default NavInfo