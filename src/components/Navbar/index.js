import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <img
        src="https://seeklogo.com/images/S/star-wars-logo-80607D2AC5-seeklogo.com.png"
        alt="starwars logo"
      ></img>

      <Link to="/">Home</Link>
      <Link to="/ships">Ships</Link>
      <Link to="/singleShips">Single Ships</Link>
      <Link to="/people">People</Link>
      <Link to="/singlePeople">Single People</Link>
    </div>
  );
};

export default Navbar;
