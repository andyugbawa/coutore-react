import React,{useState,useEffect} from 'react'
import "./mystyle.css"
import {Link} from 'react-router-dom'

function Fashion() {

  const [toggle,setToggle]=useState(false);
  const [screen,setScreen]=useState(window.innerWidth)

   
  const navToggle = () => {
    setToggle(!toggle);
};

  useEffect(()=>{
      const changeWidth=()=>{
          setScreen(window.innerWidth)
      }
      window.addEventListener("resize",changeWidth)
      return()=>{
          window.removeEventListener("resize",changeWidth)
      }
      
  },[])


  return (
    <div>
      <div >
   <div className='nav' >
     <a href="#" className='nav_brand'>Fashion & Styles</a>
      {(toggle||screen>500 )&&(
     <ul className={`nav-list ${toggle?"show-nav":""}`}>
       <li className='nav_item' ><Link to="/">Home</Link> </li>
       <li className='nav_item' ><Link to="/men">Men's</Link> </li>
       <li className='nav_item' ><Link to="/women">Women's</Link></li>
       <li className='nav_item' ><Link to="/jewelry">Jewelry</Link></li>
       {/* <li className='nav_item' ><Link to="/contacts">Contact</Link></li> */}
     </ul>

      )}
        <div onClick={navToggle} className={`nav_toggler ${toggle?"toggle":""}`}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
   </div>

      </div>

      <div className='car'>
        <div className='image-container'>
          <img className='motor' src="images/models.jpg" alt=""/>
          <div className='overlay-text'>FASHION EXPERIENCE THAT MAKE SENSE </div>
        </div>
      </div>

     


        

      <div className='cards'>
        <div className='card1'>
          <img  className='fashion' src="images/polo5.jpg" alt=""/>
          <p className='price'> Price:$1800</p>

        </div>
        <div className='card2'>
        <img  className='fashion' src="images/short shirt1.png" alt=""/>
        <p className='price'> Price:$1500</p>
        </div>
        <div className='card3'>
        <img  className='fashion' src="images/chinos3.jpg" alt=""/>
        <p className='price'> Price:$1600</p>
        </div>
      
      </div>


      <div className='cards2'>
        <div className='card1'>
          <img  className='fashion' src="images/blouse1.jpg" alt=""/>
          <p className='price'> Price:$1800</p>

        </div>
        <div className='card2'>
        <img  className='fashion' src="images/skirt2.jpeg" alt=""/>
        <p className='price'> Price:$1500</p>
        </div>
        <div className='card3'>
        <img  className='fashion' src="images/gown.jpeg" alt=""/>
        <p className='price'> Price:$1600</p>
        </div>
      
      </div>
      <div className='cards3'>
        <div className='card1'>
          <img  className='fashion' src="images/watch.jpg" alt=""/>
          <p className='price'> Price:$1800</p>

        </div>
        <div className='card2'>
        <img  className='fashion' src="images/neckchain.png" alt=""/>
        <p className='price'> Price:$1500</p>
        </div>
        <div className='card3'>
        <img  className='fashion' src="images/heel.jpg" alt=""/>
        <p className='price'> Price:$1600</p>
        </div>
      
      </div>

        <div className='line'></div>
      <div className='footer-container'>
        <div className='footer-content'>
           <div>
            <h2>Contact</h2>
             <div className='address'>
             <li>Email:andyugbawa@gmail.com</li>
             <li>Phone:+23409031773715</li>
             <li>Address:21 McCally Street plot 1156</li>

            </div>
           
          </div>
           <div>
            <h2>Quick Links</h2>
            <div className='links'>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Shipping</li>
            </ul>
            </div>
           
          </div>
        </div>
        <div className='right-content'>
        <div className='right'>
         <p className='reserved'> ©:2024 your Company all Rights Reserved </p>
        </div>

        </div>
        
      </div>    
       


     




    </div>
   
   



  )

  
}

export default Fashion
