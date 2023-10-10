import React, { useState } from 'react'
import Hamburger from './Hamburger'

const Nav = () => {
  
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div>
      <div className='navigation'>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>OFFERINGS</li>
          <li>CONTACT US</li>
        </ul>

          <div className='hamburger' onClick={toggleHamburger}>
            <Hamburger/>
          </div>
      </div>
      
    </div>
  )
}

export default Nav
