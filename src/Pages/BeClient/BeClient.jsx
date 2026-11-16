import classes from './BeClient.module.css'
import Btn from '../../Components/UI/Btn/Btn'

const lists = [
  [
    'нужна поддержка в вопросах таможенного регулирования ?',
    'есть проблемы с обеспечением холодовой цепи ?',
    'ищете прогрессивного партнера в сфере логистики ?',
    'хотите расширить каналы сбыта ?',
    'ищете подходящую IT-сиcтему ?',
    'НУЖНА ПОДДЕРЖКА В ВОПРОСАХ МАРКИРОВКИ ?'
  ],
  [
    'соответствие всем требованиям gdp',
    'прямые поставки на наш склад в соответствии с gdp',
    'высокое качество, безопасность и гибкость операций',
    'доставка заказов клиентам по всей России',
    'контроль за запасами, транспортировкой, заказами и платежами',
    'ВОЗМОЖНОСТЬ ОРГАНИЗАЦИИ МАРКИРОВКИ ВНЕ ПРОИЗВОДСТВА'
  ]
]

const BeClient = () => {
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <h2 className='h2 line-dark-text color-accent'>стать клиентом</h2>

          <div className={classes.texts}>
            <h1 className='h1'>cила присутствия</h1>
            <p className='text-base'>присутствие – это быть нашим Клиентом</p>
            <Btn isColor='dark' to={'/contacts'}>напишите нам</Btn>
          </div>
          
          <div className={classes.listBox}>
            <h3 className={`${classes.h3} h3`}>
              Вы – небольшая или средняя компания
              <span className='text-sm'>которая хочет выйти на российский рынок ?</span>
            </h3>

            <ul className={classes.list}>
              {lists[0].map(item => 
                <li className={`${classes.item} text-sm`}>{item}</li>
              )}
            </ul>
          </div>

          <div className={classes.listBox}>
            <h3 className='h3'>
              Преимущества ОРФЕ:
              <span className='text-sm'>уникальные решения, начиная от заказа до получения оплаты</span>
            </h3>

            <ul className={classes.list}>
              {lists[1].map(item => 
                <li className={`${classes.item} text-sm`}>{item}</li>
              )}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BeClient;