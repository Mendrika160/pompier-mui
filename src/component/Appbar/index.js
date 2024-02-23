import DeskAppBar from './DeskAppBar'
import MobileAppBar from './MobileAppBar'
import {useMediaQuery} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import NavInfo from './NavInfo'
import {Nav} from './style'
const Navbar = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    return(
        <Nav>
        {matches ? <MobileAppBar/> :<DeskAppBar />}
        <NavInfo />
        </Nav>
    )

}

export default Navbar 