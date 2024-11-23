import React,{useState} from 'react'
import "./mystyle2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import MainLayout from '../Layout/MainLayout'
import {Link} from 'react-router-dom'

function WomenPage() {
  const [add,setAdd] = useState(0);
  const [gown,setGown] = useState(0);
  const [bag,setBag] = useState(0);
  const [Shoe,setShoe] = useState(0);

  const handleClick=()=>{
    setAdd(prevState=>prevState+1)
  }

  const handleGown=()=>{
    setGown(prevState=>prevState+1)
  }

  const handleBag=()=>{
    setBag(prevState=>prevState+1)
  }

  const handleShoe=()=>{
    setShoe(prevState=>prevState+1)
  }
  return (
    <div>
    {/* // <MainLayout></MainLayout> */}
    <div className='nav-btn'>
       <button className='btn-item' > <Link to="/">Home</Link> </button>
    </div>
    <div className='women-page'>
          <h2>Women Page</h2>
        </div>

        <div className='women-container'>
           <div className='women_content'>
              <div className='women-image'>
              <img  className='women-wear' src="images/blouse2.jpg"/>
              </div>
              <div className='women-text'>
                <h1 className=''>BLOUSE</h1>
                <div className='p-text'>
                <p className='polo'>Blouse for Women in varoius sizes that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                <div className='price-label'>
                   <p className='price-tag'>$1400</p>
                 </div>
                 <div className='quantity'>
                 <button className='plus' onClick={handleClick}>+</button>
                 <h3>{add}</h3>
                 <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>

                 </div>
                </div>
              </div>
           </div>
           <div className='women_content'>
              <div className='women-image'>
              <img  className='women-wear' src="images/gown2.webp"/>
              </div>
              <div className='women-text'>
                <h1 className=''>GOWN</h1>
                <div className='p-text'>
                <p className='polo'>Gowns for Women in varoius sizes that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                <div className='price-label'>
                   <p className='price-tag'>$1250</p>
                 </div>
                 <div className='quantity'>
                 <button className='plus' onClick={handleGown}>+</button>
                 <h3>{gown}</h3>
                 <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>

                 </div>
                </div>
              </div>
           </div>

           <div className='women_content'>
              <div className='women-image'>
              <img  className='women-wear' src="images/handbag.jpg"/>
              </div>
              <div className='women-text'>
                <h1 className=''>HANDBAG</h1>
                <div className='p-text'>
                <p className='polo'>Handbags for Women of different varitiee that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                <div className='price-label'>
                   <p className='price-tag'>$1590</p>
                 </div>
                 <div className='quantity'>
                 <button className='plus' onClick={handleBag}>+</button>
                 <h3>{bag}</h3>
                 <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>

                 </div>
                </div>
              </div>
           </div>


           <div className='women_content'>
              <div className='women-image'>
              <img  className='women-wear' src="images/heel2.jpg"/>
              </div>
              <div className='women-text'>
                <h1 className=''> WOMEN SHOE</h1>
                <div className='p-text'>
                <p className='polo'>Women Shoes of different varitiee that is according to your request in different colors  make your quantity request by clicking the plus sign</p>
                <div className='price-label'>
                   <p className='price-tag'>$1190</p>
                 </div>
                 <div className='quantity'>
                 <button className='plus' onClick={handleShoe}>+</button>
                 <h3>{Shoe}</h3>
                 <div className='cart'><FontAwesomeIcon icon={faCartShopping} /></div>

                 </div>
                

                </div>
              </div>
           </div>

        </div>





  </div>
  )
}

export default WomenPage
