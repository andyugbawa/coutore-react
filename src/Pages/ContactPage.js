import React from 'react'
// import MainLayout from '../Layout/MainLayout'
import {Link} from 'react-router-dom'

function ContactPage() {
  return (
    <div>
      {/* // <MainLayout></MainLayout> */}
        <button className='nav_item' > <Link to="/">Home</Link> </button>
        <h2>Contact Page</h2>

    </div>
  )
}

export default ContactPage
