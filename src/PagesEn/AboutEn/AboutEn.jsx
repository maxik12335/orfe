import classes from './AboutEn.module.css'
import Loader from '../../Components/loader/Loader'
import { useState } from 'react';

const list = [
  "Offices in Moscow",
  "Logistic Platform",
  "Bonded Warehouse",
  "Domestic Warehouse",
  "Licenses",
  "Proprietary Fleet",
  "Different Temperature Regimes",
  "Tailored made ERP",
  "Quality System"
]


const AboutEn = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <h2 className='h2 line-dark-text color-accent'>about the company</h2>

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
              As experienced distributor of pharmaceuticals, we work to ensure that you, as health care providers, have access to your final Clients in Russia, on time and with the highest standard
            </p>

            <p className='text-sm'>
              Drawing on our deep knowledge and industry experience, ORFE fully supports your logistic needs with everything from channel management strategies and scalable distribution models, to order to cash and real-time reporting solutions
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutEn;