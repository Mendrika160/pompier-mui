import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
//import { Button } from "@mui/material";

export const  NavigationItem = styled('div')(({ theme }) => ({

    display: 'flex',
    position: 'relative',
    color: '#fff',
    padding: theme.spacing(0,2),
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]:{
        position: 'relative',
        left:'100%'
    }

}));

export const  LogoNav = styled(Typography)(({ theme }) => ({

    color:'#fff',
    [theme.breakpoints.down('xs')]:{
        color:'#fff',
       display:'flex',
       alignItems: 'center',
       justifyContent:'center'
    }

}));

export const NavInfoContainer = styled('div')(({ theme }) => ({
    height: '36px',
    // button:{
    //     padding: theme.spacing(0,1)
    // }
    backgroundColor : 'rgba(17, 63, 103, 0.6)',
    backdropFilter:'blur(5px)'

}));
export const DeskNavBarContainer = styled('nav')(({ theme }) => ({
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor : theme.palette.primary.main,
    padding: theme.spacing(5,4),
    position:'relative',
    zIndex:'99999'

}));
export const MobileNavContainer = styled('nav')(({ theme }) => ({
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor : theme.palette.primary.main,
    padding: theme.spacing(5,4),
    position:'relative',
}));
export const Nav = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection:'column',
    position:"fixed",
    top:0,
    width: '100%',
    zIndex: '999'
}));



export const SocialProvider = styled('div')(({ theme }) => ({
    display:'flex',
    position:'relative',
    left: '55%',
    padding:theme.spacing(0,6),
    [theme.breakpoints.down('md')]: {
        left: '40%'
    },
    [theme.breakpoints.down('sm')]: {
        left:'20%',
    },
    [theme.breakpoints.down('xs')]: {
        left: '10%'
    }

}));