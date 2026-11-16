import classes from './UslugyEn.module.css'
import { useState } from 'react'
import Modal from '../../Components/Modal/Modal'
import Close from '../../Components/UI/Close/Close'

const list = [
  {
    title: "Regulatory Affairs & General Consultancy",
    body: "How to implement your business in Russia with the right scheme and sustainability for growth",
    modalList: [
      "ORFE provides consulting services on a wide scope of issues, including regulatory requirements for pharmaceutical market participants. It makes it possible to conduct an effective, safe and quality business in the process of pharmaceuticals circulation in the Russian Federation territory",
      "Our experts are able to recommend:",
      "- companies that are directly involved in the registration of pharmaceuticals and medical devices on the Russian Federation territory",
      "- organizations that perform pharmacovigilance functions, provide regulatory and legal assistance in the process of obtaining a pharmaceutical license for wholesale trade and storage, advise on the supply chain structuring of products from a producer to a patient and provide with general advices on the daily activities of companies",
      "As such allows to producers of drug products and medical devices to organize their business in the Russian Federation territory at optimum costs within an acceptable business frame work",
    ]
  },
  {
    title: "Customs, Import, Logistics",
    body: "ORFE’s 4PL services help mitigate risk inherent with distribution while providing full clarity into where your product is going, who is receiving it, how it is used",
    modalList: [
      "ORFE provides full scope of services when the import of pharmaceuticals and medical devices to the Russian Federation territory occurs",
      "ORFE is included in the State Registers of Owners of temporary bonded warehouse/bonded warehouse. ORFE has a license for wholesale trade of pharmaceuticals and parapharmaceuticals. Temporary bonded warehouse and bonded warehouse are a cell type of storage that allows optimizing costs and risks when declaring customs procedures. Temporary bonded warehouse and bonded warehouse have a capacity for 10.000 pallet places and operate strictly in accordance with customs legislation and the existing pharmaceutical procedures",
      "ORFE is included in the Register of Customs Representatives (certificate No. 0996/00). Due to this certificate ORFE is able to perform customs operations on behalf of the producer/importer in relation to production and vehicles that are transported by the producers across the customs border of the Customs Union in accordance with the current legislation of the Customs Union and the Russian Federation",
      "ORFE offers an examination of documents for compliance with customs legislation, monitors HS codes and gives recommendations on the products classification and their correct descriptions in a shipping documents. ORFE also assists in organization of obtaining a permission documents from state authorities, gives a consultancy on customs legislation and on practical issues of customs clearance and foreign economic activity",
    ]
  },
  {
    title: "Serialization",
    body: "ORFE is fully compliant with the Russian Serialization Law effective from 2019",
    modalList: [
      "SERIALIZATION FOR NON-SERIALIZED PHARMACEUTICALS WITHIN THE BONDED WAREHOUSE IN RUSSIAN FEDERATION",
      "Nowadays, ORFE works successfully with the federal system to monitor the flow of drugs (MDLP system). ORFE is ready to provide the serialization service for non-serialized pharmaceuticals within its own Bonded warehouse, the capacity of which is 10.000 pallets",
    ]
  },
  {
    title: "Sales",
    body: "Key Account Managers ensure ordering, tracking platform, accurate and timely procurement of your drugs which are delivered in the optimum packaging required by Russian requirements",
    modalList: [
      "ORFE operates in compliance with the Wholesale Trade rules, legislation in the field of pharmaceuticals circulation and price regulation (trade markups) for vital and most essential drugs, as well as in compliance with the Customer’s requirements (GDP Rules)",
      "Managers of ORFE’s sales department ensure the timely and accurate fulfillment of a Customer’s instructions to manage by the Customer’s property and to track the Customer’s products that are delivered to сlients (buyers) in accordance with all the requirements of the legislation of the Russian Federation",
      "The Sales dept. team organizes deliveries to the warehouse of a wholesaler of drug products for medical use, analyzes an inventory state, prepares a sales of drug products, monitors a remaining expiry dates (acceptable) for deliveries and sales, prepares and manages by a distribution documents, monitors a client’s license, controls the repayment of a client’s debt, organizes and controls a delivery of drug products, taking into account the temperature regime and other required conditions, and also informs customers about the recall (withdrawal) of drug products or the suspension of sales",
    ]
  },
  {
    title: "Order to cash",
    body: "Different solutions available, to allow you to make business in Russia with the minimal insiderization, and keeping full control on your operations. We have strong relationships with more than 450+ pharmaceutical and health care operators all across Russia – regional distributors, hospital, chains of pharmacies, state health organization",
    modalList: [
      "Different solutions available, to allow you to make business in the Russian Federation with the minimum number of Customer’s employees but maximum control on operations",
      "Whatever the business model, ORFE can provide a Customer with real-time reporting solutions using Microsoft Dynamics AX ERP. ORFE’s Track and Trace software allows for detailed and accurate reporting on all serialized products of a Customer in accordance with his request",
      "We have strong relationships with more than 450+ pharmaceutical and health care operators all across the Russian Federation – regional distributors, hospital, chains of pharmacies, state health organization",
    ]
  },
  {
    title: "Distribution",
    body: "ORFE’s state-of-the-art drug distribution center enables your pharmaceutical products to reach end point hospitals, clinics and the retail channel in any region of Russia providing safe and effective care to your local patients",
    modalList: [
      "ORFE’s state-of-the-art warehouse complex provides storage and transportation of drug products and medical products in compliance with the required temperature storage conditions and producer’s instructions",
      "ORFE offers various types of products storage: racks storage, cell type of storage, floor storage areas, storage of products under different temperature regimes. Warehouse complex ORFE corresponds to the international GDP and ISO standards. This fact is repeatedly confirmed by the results of audits. ORFE’s warehouses are equipped with modern ventilation, fire extinguishing, video surveillance systems and independent power supply sources",
      "For transportation services ORFE operates both owned and outsourced transport vehicles. Vehicles transportation is carried out on the territory of Moscow, the Moscow Region and the Russian Federation. All vehicles are validated and equipped with temperature and GPS monitoring. The main temperature regimes are +2 °C +8 °C; +15 °C +25 °C. ORFE has unique thermal containers in which temperature regimes +2 °C +8 °C and +15 °C +25 °C is maintained up to 120 hours",
    ]
  },
]

const UslugyEn = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='section line-dark'>
      <div className="container">

        <div className="content">
          <h2 className='h2 line-dark-text color-accent'>услуги</h2>
          
          <p className={`${classes.subtitle} text-base`}>
            <span className='h1 color-accent'>orfe</span>is a Multitasking Pharma Business Partner offering INTEGRATED SOLUTIONS
          </p>
          
          <div className={classes.content}>
            <ul className={classes.list}>
              {list.map(item => 
                <li className={classes.item}>
                  <h3 className='h3 hover' onClick={() => setIsOpen(item)}>{item.title}</h3>
                  <p className='text-sm'>{item.body}</p>
                </li>
              )}
              {isOpen && 
                <Modal>
                  <Close onClick={() => setIsOpen(false)}/>
                  <h2 className='h2'>{isOpen.title}</h2>
                    <ul className={classes.modlList}>
                      {isOpen.modalList.map(item => 
                        <li className='text-sm'>{item}</li>
                      )}
                    </ul>
                </Modal>
              }
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UslugyEn;