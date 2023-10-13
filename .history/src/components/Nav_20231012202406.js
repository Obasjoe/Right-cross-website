import React, { useState } from 'react'

function Nav() {
  const [active, setActive] = useState("nav_menu");
  const [icon, setIcon] = useState("nav_toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");
    // Icon Toggler
    if (icon === "nav__toggler toggler") {
      setIcon("nav__toggler");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className='nav'>
      <a href="#" className='nav__brand'>
        Joseph
      </a>
      <ul className={active}>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Home
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Offerings
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            About
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Testimonials
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            Contact us
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className='line1'></div>
        <div className='line1'></div>
        <div className='line1'></div>
      </div>
    </nav>
  )
}

export default Nav


