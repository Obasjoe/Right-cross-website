import React from "react";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div>
        <div className="bar-one" />
        <div className="bar-two" />
        <div className="bar-three" />
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Offerings</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
