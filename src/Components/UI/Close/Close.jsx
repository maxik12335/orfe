import classes from './Close.module.css'

const Close = ({...props}) => {
  return (
    <div className={`${classes.close} hover`} {...props}>
      <span ></span>
      <span ></span>
    </div>
  )
}

export default Close;