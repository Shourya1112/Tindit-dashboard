import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/globalComponents/navbar/NavBar.css"

function NavBar() {
  return (
    <div className='navbar-main-div'>
      <Link to="/dashboard/user" className='left'>
        <p className='title'>AiCanSell</p>
        <p className='sub-title'>Dashboard</p>
      </Link>

      <div className='middle'>
        <input type='text' placeholder='Search' className='search-box'/>
      </div>

      <div className='right'>
        <p className='greeting'>
          Hi There..
        </p>
        <Link to="/" className='log-out-btn'>
          <p className='btn-text'>Log Out</p>
        </Link>
      </div>
    </div>
  )
}

export default NavBar