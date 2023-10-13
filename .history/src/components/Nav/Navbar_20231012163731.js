import React from 'react'
import Burger from './Burger'


const Nav = styled.nav`
  width: 100%;
  height: 20%;
  `

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        Nav Bar
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
