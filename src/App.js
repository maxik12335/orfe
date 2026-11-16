import './styles/App.css'
import { HashRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/NavbarBase/NavbarBase';
import AppRouter from './Components/AppRouter';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/UI/ScrollToTop';
import {ThemeProvider} from './context/ThemeContext'

function App() {

  return (
    <HashRouter >
      <ThemeProvider>
        <ScrollToTop />
        <Navbar />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </HashRouter>
  )
}

export default App;
