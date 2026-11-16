import { NavLink, useLocation } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Close from '../UI/Close/Close'
import { NAV_LINKS_RU, NAV_LINKS_EN } from '../../data/links'
import classes from './MobileMenu.module.css'
import { useState } from 'react'
import Burger from '../UI/Burger/Burger'
import Btn from '../../Components/UI/Btn/Btn'
import ru from '../../assets/langs/ru.png'
import en from '../../assets/langs/en.png'
import LangSwitch from '../LangSwitch/LangSwitch'
import ThemeToggle from '../UI/ThemeToggle/ThemeToggle'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation();
  const isEn = pathname.startsWith('/en');
  const links = isEn ? NAV_LINKS_EN : NAV_LINKS_RU;
  return (
    <div>

      <div className={classes.burgerBox}>
        <h2 className="h2 color-accent">orfe</h2>
        <Burger onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && 
        <Modal onClick={() => setIsOpen(null)}>
          <div className={classes.mobyleMenu}>
            <div className={classes.header}>
              <h2 className="h2 color-accent">orfe</h2>
              <ThemeToggle />
              <Close onClick={() => setIsOpen(null)} />
            </div>

            <nav className={classes.menu}>
              {links.map(link => (
                <NavLink key={link.to} className={`${classes.link} text-base`} to={link.to} onClick={() => setIsOpen(null)}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <LangSwitch />
          </div>
        </Modal>
      }

    </div>
  )
}

export default MobileMenu
