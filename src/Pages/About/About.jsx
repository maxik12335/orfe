import classes from './About.module.css'
import img from '../../assets/about/1.jpg'

const list = [
  "Офисы в Москве",
  "Логистическая платформа",
  "Таможенный склад",
  "Аптечный склад",
  "Различные температурные режимы",
  "Все необходимые лицензии и сертификаты",
  "Собственный транспорт",
  "IT-система, разработанная с учетом специфики отрасли",
  "Система качества"
]


const About = () => {
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <h2 className='h2 line-dark-text color-accent'>о компании</h2>

          <ul className={classes.list}>
            <img className={classes.img} src={img} alt="" />
            {list.map(item => 
              <li className={`${classes.item} text-base`}>{item}</li>
            )}
          </ul>

          <div className={classes.texts}>
            <p className='text-sm'>
              Как опытный дистрибьютор фармацевтических препаратов, мы работаем над тем, чтобы у вас, как у поставщиков медицинских услуг, постоянно был доступ к клиентам в России: своевременный и на основе высоких стандартов
            </p>

            <p className='text-sm'>
              Основываясь на глубоких знаниях и опыте работы в отрасли, ОРФЕ полностью покрывает все ваши логистические потребности: от стратегии управления каналами сбыта и различных моделей дистрибуции до системы отчетности в режиме реального времени
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;