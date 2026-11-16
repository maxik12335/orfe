import classes from './BeClientEn.module.css'
import Btn from '../../Components/UI/Btn/Btn'

const lists = [
  [
    'need custom assistance ?',
    'meet troubles to maintain the cold chain ?',
    'are looking for a progressive logistics partner ?',
    'without satisfactory distribution coverage ?',
    'are in search of an ERP driven environment ?',
    'within serialitazion and labelling services ?'
  ],
  [
    'сavoid non-gdp custom warehouses',
    'ship directly into bonded gdp warehouse',
    'maintain quality, safety and operational flexibility',
    'deliver orders directly to customers all over Russia',
    'monitor stock, transport, orders and payments',
    'serialized pharmaceuticals within bonded warehouse'
  ]
]

const BeClientEn = () => {
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <h2 className='h2 line-dark-text color-accent'>Be Our Client</h2>

          <div className={classes.texts}>
            <h1 className='h1'>The Power of Presence</h1>
            <p className='text-base'>BE PRESENT, BE OUR CLIENT</p>
            <Btn isColor='dark' to={'/contacts'}>CONTACT US</Btn>
          </div>
          
          <div className={classes.listBox}>
            <h3 className={`${classes.h3} h3`}>
              Are you a small or mid-size company interested to enter the Russian market?
              <span className='text-sm'>interested to enter the Russian market ?</span>
            </h3>

            <ul className={classes.list}>
              {lists[0].map(item => 
                <li className={`${classes.item} text-sm`}>{item}</li>
              )}
            </ul>
          </div>

          <div className={classes.listBox}>
            <h3 className='h3'>
              Benefit from Orfe’s
              <span className='text-sm'>unique offering with tailor made order to cash possibilities:</span>
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

export default BeClientEn;