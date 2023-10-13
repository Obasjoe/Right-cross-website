import React, { useState } from 'react'
import Hamburger from './Hamburger'
import "../App.css"

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

      <style jsx>{`

          /*Nav section styling*/
          .navigation{
              width: 100%;
              height: 50px;
          }

          .navigation ul{
              display: flex;
              flex-wrap: wrap;
              float: right;
              margin: 20 0px;
              padding: 0 25px;
          }

          .navigation ul li{
              list-style-type: none;
              padding-right: 10px;
          }
          .hamburger{
              display: none;
          }

          @media (max-width: 767px){

              .hamburger{
                  display: fixed;
                  padding-top: 10px;
                  margin-left: 10px;
                  z-index: 10;
              }

              
          }

      }
      
      `}</style>
      
    </div>
  )
}

export default Nav
