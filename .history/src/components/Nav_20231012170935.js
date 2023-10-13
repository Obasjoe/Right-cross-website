import React from 'react'
import './App.css'


const MobileMenu = () => {
    return (
      <div className={'mobile-menu'}>
          <a href='#home'>Home</a>
          <a href='#news'>Home</a>
          <a href='#shop'>Home</a>
          <a href='#contact'>Home</a>
          <a href='#about'>Home</a>
      </div>
    );
  };


function Nav() {
    const [isShown, setIsShown] = useState(false);
    const toggleMobileMenu = () => {
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

            {/* The mobile menu and the close button */}
            {isShown && <MobileMenu />}
            {isShown && (
                <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
                    &times;
                </button>
            )}

            {/* Dummy content */}
            <div className='content'>
             <h2>Welcome to KindaCode.com</h2>
            <p>Responsive top navigation bar with React and pure CSS</p>
      </div>
        </>

    )
  
}
