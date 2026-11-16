import classes from './Mark.module.css'
import Btn from '../../Components/UI/Btn/Btn'

const Mark = () => {
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <h2 className='h2 line-dark-text color-accent'>маркировка</h2>

          <div className={classes.texts}>
            <h3 className='h3'>
              маркировка лекарственных средств на таможенном складе
            </h3>

            <p className='text-base'>
              В настоящее время ОРФЕ успешно работает с ФГИС МДЛП. ОРФЕ готова предоставлять услугу по маркировке лекарственных средств на таможенном складе, вместимость которого более 10 тысяч паллето-мест
            </p>

            <Btn isColor='dark' href="https://www.orfe.ru/wp-content/uploads/2022/03/Анкета-на-оказание-услуг-по-маркировке-2.docx" style={{marginTop: '16px'}}>загрузить и заполнить анкету</Btn>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mark;