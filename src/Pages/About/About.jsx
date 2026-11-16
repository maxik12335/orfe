import classes from './About.module.css'
import Loader from '../../Components/loader/Loader'
import { useState } from 'react';

const list = [
  "Офисы в Москве",
  "Таможенный склад",
  "Аптечный склад",
  "Система качества",
  "Логистическая платформа",
  "Собственный транспорт",
  "Различные температурные режимы",
  "Все необходимые лицензии и сертификаты",
  "IT-система, разработанная с учетом специфики отрасли"
]


const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <h2 className='h2 line-dark-text color-accent'>о компании</h2>

          <div className={classes.box}>
            <div className={classes.iframe}>
              <iframe
                // className={classes.iframe}
                src="https://www.youtube.com/embed/zl8zoRQvZ_s"
                frameborder="0"
                allowfullscreen="allowfullscreen"
                onLoad={() => setIsLoaded(true)}
              ></iframe>
              {!isLoaded && <Loader />}
            </div>

            <ul className={classes.list}>
              {/* <img className={classes.img} src={img} alt="" /> */}
              
              {list.map(item => 
                <li className={`${classes.item} text-base`}>{item}</li>
              )}
            </ul>
          </div>

          <div className={classes.texts}>
            {/* <iframe className={classes.iframe} src="https://www.youtube.com/embed/zl8zoRQvZ_s" width="750" height="440" frameborder="0" allowfullscreen="allowfullscreen"></iframe> */}
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