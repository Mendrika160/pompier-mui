import React from 'react'
import {Card,CardContent,Typography,Grid} from '@mui/material'
import {DevisCard} from './style'

const CardVille = ({ville}) => {
  return (
    <>
          <Card sx={{height: '40px',mb:2}}>
            <DevisCard>
                     
                <Typography variant="body-2" component="p">{ville}</Typography>
                 
                   
            </DevisCard>
        </Card>
    </>
  )
}

export default CardVille