
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {CssBaseline } from '@mui/material'
import theme from './theme/theme'
import Navbar from './component/Appbar/index'
import Banner from './component/Banner/Banner'

import Footer from './component/Footer/Footer'
import Home from './component/Home'
import Prestation from './component/prestation/Prestation';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar />
        <Banner />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/prestation/:id' exact element={<Prestation/>}/>
        </Routes>
        <Footer/>
    </ThemeProvider>
    </>
  );
}

export default App;
