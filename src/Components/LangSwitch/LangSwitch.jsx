// UI/LangSwitch/LangSwitch.jsx
import classes from './LangSwitch.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import ru from '../../assets/langs/ru.png';
import en from '../../assets/langs/en.png';

const LangSwitch = () => {
  const { pathname } = useLocation();

  const isEn = pathname.startsWith('/en');
  const ruPath = isEn ? pathname.replace(/^\/en/, '') || '/' : pathname;
  const enPath = isEn ? pathname : `/en${pathname === '/' ? '' : pathname}`;

  return (
    <div className={classes.footer}>
      <NavLink className={classes.imgBtn} to={ruPath} aria-disabled={isEn}>
        <img className={`${classes.img} ${isEn ? classes.dim : ''}`} src={ru} alt="RU" />
      </NavLink>
      <NavLink className={classes.imgBtn} to={enPath} aria-disabled={!isEn}>
        <img className={`${classes.img} ${!isEn ? classes.dim : ''}`} src={en} alt="EN" />
      </NavLink>
    </div>
  );
};

export default LangSwitch;
