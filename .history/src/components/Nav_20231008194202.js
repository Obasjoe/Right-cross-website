import React from 'react'
import Hamburger from './Hamburger'

const Nav = () => {
  return (
    <div>
      <div className='navigation'>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>OFFERINGS</li>
          <li>CONTACT US</li>
        </ul>

          <div className='hamburger'>
            <Hamburger/>
          </div>
      </div>
      
    </div>
  )
}

export default Nav
