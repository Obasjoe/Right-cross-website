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
}
