import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={classes.section} id="contacts"> 
      <div className="container-navbar">
        
        <div className="content">
          <div className={classes.texts}>
            <h2 className='h2'>orfe</h2>
            <p className="text-sm">pharma business solutions</p>
          </div>          
        </div>
        
      </div>
    </div>
  )
}

export default Footer;