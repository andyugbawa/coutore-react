import React,{useState} from 'react'
import "./mystyle2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import MainLayout from '../Layout/MainLayout'
import {Link} from 'react-router-dom'

function MenPage() {
  const [add,setAdd] = useState(0);
  const [sleve,setSleve]=useState(0)
  const [sneaker,setSneaker]=useState(0)

  const handleClick=()=>{
    setAdd(prevState=>prevState+1)
  }

  const handleSleve=()=>{
    setSleve(prevState=>prevState+1)
  }
  const handleSneaker=()=>{
    setSneaker(prevState=>prevState+1)
  }
  return (
    <div>
      {/* // <MainLayout></MainLayout> */}
          <div className='nav-btn'>
            <button className='btn-item' > <Link to="/">Home</Link> </button>
         </div>
        <div className='men-page'>
          <h2>Men Page</h2>
        </div>

        <div className='men-container'>
           <div className='men_content'>
              <div className='men-image'>
              <img  className='men-wear' src="images/polo2.jpg" alt=""/>
              </div>
              <div className='men-text'>
                <h1 className=''>POLO NECK SHIRT</h1>
                <div className='p-text'>
                <p className='polo'>Polo Neck Shirt for Men in varoius sizes that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                 <div className='price-label'>
                   <p className='price-tag'>$1390</p>
                 </div>
                 <div className='quantity'>
                    <button className='plus' onClick={handleClick}>+</button>
                    <h3>{add}</h3>
                    <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>

                 </div>
                </div>
              </div>
           </div>
           <div className='men_content'>
              <div className='men-image'>
              <img  className='men-wear' src="images/sleve5.jpg" alt=""/>
              </div>
              <div className='men-text'>
                <h1 className=''>LONG SLEVE SHIRT</h1>
                <div className='p-text'>
                <p className='polo'>Long Sleve Shirt for Men in varoius sizes that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                <div className='price-label'>
                   <p className='price-tag'>$1290</p>
                 </div>
                 <div className='quantity'>
                 <button className='plus' onClick={handleSleve}>+</button>
                 <h3>{sleve}</h3>
                 <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>
                

                 </div>
                

                </div>
              </div>
           </div>
           <div className='men_content'>
              <div className='men-image'>
              <img  className='men-wear' src="images/sneaker2.jpg" alt=""/>
              </div>
              <div className='men-text'>
                <h1 className=''>SNEAKER</h1>
                <div className='p-text'>
                <p className='polo'>Sneakers for Men in varoius sizes that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                  
                <div className='price-label'>
                   <p className='price-tag'>$1350</p>
                 </div>
                 <div className='quantity'>
                 <button className='plus' onClick={handleSneaker}>+</button>
                 <h3>{sneaker}</h3>
                 <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>

                 </div>
                

                </div>
              </div>
           </div>

        </div>

        

    </div>
      
   
  )
}

export default MenPage
