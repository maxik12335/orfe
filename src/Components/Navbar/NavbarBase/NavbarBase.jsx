import classes from "./NavbarBase.module.css"
import { NavLink, useLocation } from "react-router-dom";
import MobileMenu from "../../MobileMenu/MobileMenu";
import { NAV_LINKS_RU, NAV_LINKS_EN  } from "../../../data/links";
import LangSwitch from '../../LangSwitch/LangSwitch'
import ThemeToggle from "../../UI/ThemeToggle/ThemeToggle";

// NAV_LINKS - массив с ссылками в src/data/links.js
// стили для статчиного меню bg-color и color в .navbar

const NavbarBase = () => {
  const { pathname } = useLocation();
  const isEn = pathname.startsWith('/en');
  const links = isEn ? NAV_LINKS_EN : NAV_LINKS_RU;
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <h2 className="h2 color-accent">orfe</h2>

          <div className={classes.menu}>
            {links.map(link => (
              <NavLink key={link.to} className="text-sm hover" to={link.to}>
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <LangSwitch />
          </div>
        </div>

        <MobileMenu />

      </div>
    </div>
  )
}

export default NavbarBase;