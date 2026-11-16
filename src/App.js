import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/NavbarBase/NavbarBase';
import AppRouter from './Components/AppRouter';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/UI/ScrollToTop';
import {ThemeProvider} from './context/ThemeContext'

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider>
        <ScrollToTop />
        <Navbar />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
