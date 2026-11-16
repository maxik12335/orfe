import classes from './MarkEn.module.css'
import Btn from '../../Components/UI/Btn/Btn'

const MarkEn = () => {
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <h2 className='h2 line-dark-text color-accent'>Serialization</h2>

          <div className={classes.texts}>
            <h3 className='h3'>
              SERIALIZATION FOR NON-SERIALIZED PHARMACEUTICALS WITHIN THE BONDED WAREHOUSE IN RUSSIAN FEDERATION
            </h3>

            <p className='text-base'>
             Nowadays, ORFE works successfully with the federal system to monitor the flow of drugs (MDLP system). ORFE is ready to provide the serialization service for non-serialized pharmaceuticals within its own Bonded warehouse, the capacity of which is 10.000 pallets
            </p>

            <Btn isColor='dark' href="https://www.orfe.ru/wp-content/uploads/2022/03/Анкета-на-оказание-услуг-по-маркировке-2.docx" style={{marginTop: '16px'}}>download and fill the form</Btn>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MarkEn;