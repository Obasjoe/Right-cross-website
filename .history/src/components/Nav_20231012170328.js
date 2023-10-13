import React from 'react'
import './App.css'


const mMenu = () => {
    return (
      <div className={'mobile-menu'}>
          <a href='#home'>Home</a>
          <a href='#home'>Home</a>
          <a href='#home'>Home</a>
          <a href='#home'>Home</a>
          <a href='#home'>Home</a>
      </div>
    );
  };


function Nav() {
    const [isShown, setIsShown] = useState(false);
    const togglemMenu = () => {
        setIsShown(!isShown);
    }

    return (
        <>
            <div className='topnav'>
                <div className='logo'>
                    KINDA<span>CODE</span>
                </div>

                <div className='menu'>
                    <a href='#home' className='active-link'>
                        Home
                    </a>
                    <a href='#news'>News</a>
                    <a href='#shop'>Shop</a>
                    <a href='#contact'>Contact</a>
                    <a href='#about'>About</a>

                </div>

                <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                    &#8801;
                </button>

            </div>
        
        </>

    )
  
}
