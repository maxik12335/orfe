import classes from "./NavbarBase.module.css"
import { NavLink } from "react-router-dom";
import MobileMenu from "../../MobileMenu/MobileMenu";
import { NAV_LINKS } from "../../../data/links";

// NAV_LINKS - массив с ссылками в src/data/links.js
// стили для статчиного меню bg-color и color в .navbar

const NavbarBase = () => {
  
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <h2 className="h2">orfe</h2>

          <div className={classes.menu}>
            {NAV_LINKS.map(link => (
              <NavLink key={link.to} className="text-sm hover" to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <MobileMenu />

      </div>
    </div>
  )
}

export default NavbarBase;