import classes from './Contacts.module.css'
import logo from '../../assets/logo.png'
import FormOrfe from '../../Components/FormOrfe/FormOrfe'

const Contacts = () => {
  const handleSubmit = async (data) => {
   // Сюда только логика отправки, без стейтов формы
   console.log('Отправляем:', data);
 };
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <h2 className='h2 line-dark-text color-accent'>контакты</h2>

          <div className={classes.contacts}>
            <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1125.960785785001!2d37.645306658338804!3d55.63817850901584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM4JzE3LjQiTiAzN8KwMzgnNDcuMCJF!5e0!3m2!1sit!2sit!4v1531326702930" frameborder="0"></iframe>

            <div className={classes.data}>
              <img className={classes.logo} src={logo} alt="logo" />

              <p className='text-base'>
                Россия, Москва, ул. Кантемировская, д. 58, 115477
              </p>

              <a className={`${classes.call} text-sm hover`} href="tel:+74952340401">
                +7 495 234 04 01
              </a>
                
              <a className={`${classes.call} text-sm hover`} href="mailto:orfeao@orfe.ru">
                orfeao@orfe.ru
              </a>
            </div>

          </div>

          <div className={classes.form}>
            <FormOrfe onSubmit={handleSubmit}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contacts;