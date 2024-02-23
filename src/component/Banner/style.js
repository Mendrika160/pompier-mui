import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import ImgBanner from '../../assets/img/banners-homepage.png'


export const  BannerSection = styled(Box)(({ theme }) => ({
    width:'100%',
    marginTop: '80px',
    height: '500px',
    backgroundImage: `url(${ImgBanner})`,
    backgroundColor: theme.palette.primary.main,
    
    backgoundSize: 'cover',
    color: '#f5f5f5',
    [theme.breakpoints.down('sm')]: {
        marginTop: '80px'
    }
}));


export const BannerItem = styled('div')(({ theme }) => ({
    display:'block',
    padding: theme.spacing(20,13),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(15,8),
        p: {
            fontSize: '14px',
        },
        button:{
            width:'100%'
        }
    }
  

}));