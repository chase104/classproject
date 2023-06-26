import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img
        className='logo'
        src="https://seeklogo.com/images/S/star-wars-logo-80607D2AC5-seeklogo.com.png"
        alt="starwars logo"
      />

      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/ships">Ships</Link>
      <Link className='link' to="/people">People</Link>
    </div>
  );
};

export default Navbar;
