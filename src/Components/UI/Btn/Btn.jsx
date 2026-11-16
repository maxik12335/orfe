import classes from './Btn.module.css'
import { NavLink } from 'react-router-dom';

const Btn = ({children, isColor='', size='', to, href, ...props}) => {
  
  const STYLES = {
    dark: classes.dark,
    light: classes.light,
  }

  const SIZES = {
    sm: classes.sm,
    md: classes.md,
    lg: classes.lg,
  }

  const cls = [
    classes.btn,
    STYLES[isColor],
    SIZES[size],
    'text-sm'
  ].filter(Boolean).join(' ');

  if(to) {
    return (
      <NavLink className={cls} to={to} {...props}>
        {children}
      </NavLink>
    )
  }

  if(href) {
    return (
      <a className={cls} href={href} download {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={cls} type="button" {...props}>
      {children}
    </button>
  )
    

  
  
}

export default Btn;