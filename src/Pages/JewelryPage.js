import React,{useState} from 'react'
import "./mystyle2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import MainLayout from '../Layout/MainLayout'
import {Link} from 'react-router-dom'

function JewelryPage() {
  const [add,setAdd] = useState(0);
  const [diamond,setdiamond] = useState(0);
  const [watch,setWatch] = useState(0);

  const handleClick=()=>{
    setAdd(prevState=>prevState+1)
  }

  const handleDiamond=()=>{
    setdiamond(prevState=>prevState+1)
  }

  const handleWatch=()=>{
    setWatch(prevState=>prevState+1)
  }
  

  return (
    <div>
    {/* // <MainLayout></MainLayout> */}
    <div className='nav-btn'>
            <button className='btn-item' > <Link to="/">Home</Link> </button>
         </div>
         <div className='jewel-page'>
          <h2>Jewelry Page</h2>
        </div>

        <div className='jewel-container'>
           <div className='jewel_content'>
              <div className='jewel-image'>
              <img  className='jewel-wear' src="images/lace2.png"/>
              </div>
              <div className='jewel-text'>
                <h1 className=''>NECK LACE</h1>
                <div className='p-text'>
                <p className='polo'> Jewel Necklace in varoius colors that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                <div className='price-label'>
                   <p className='price-tag'>$10000</p>
                 </div>
                 <div className='quantity'>
                 <button className='plus' onClick={handleClick}>+</button>
                 <h3>{add}</h3>
                 <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>

                 </div>
                </div>
              </div>
           </div>
           <div className='jewel_content'>
              <div className='jewel-image'>
              <img  className='jewel-wear' src="images/diamond.jpg"/>
              </div>
              <div className='jewel-text'>
                <h1 className=''>DIAMOND CHAIN</h1>
                <div className='p-text'>
                <p className='polo'>Exqiuisite Diamond Chains in varoius colors that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                <div className='price-label'>
                   <p className='price-tag'>$5000</p>
                 </div>
                 <div className='quantity'>
                 <button className='plus' onClick={handleDiamond}>+</button>
                 <h3>{diamond}</h3>
                 <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>

                 </div>
                

                </div>
              </div>
           </div>
           <div className='jewel_content'>
              <div className='jewel-image'>
              <img  className='jewel-wear' src="images/watch.jpg"/>
              </div>
              <div className='jewel-text'>
                <h1 className=''>WRISTWATCH</h1>
                <div className='p-text'>
                <p className='polo'>Gold and Diamond wristwatches in varoius  sizes that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                <div className='price-label'>
                   <p className='price-tag'>$1400</p>
                 </div>
                 <div className='quantity'>
                 <button className='plus' onClick={handleWatch}>+</button>
                 <h3>{watch}</h3>
                 <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>

                 </div>
                

                </div>
              </div>
           </div>

        </div>


  </div>
  )
}

export default JewelryPage
