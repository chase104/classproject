import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        className={styles.logo}
        src="https://seeklogo.com/images/S/star-wars-logo-80607D2AC5-seeklogo.com.png"
        alt="starwars logo"
      ></img>

      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/ships">Ships</Link>
      <Link className={styles.link} to="/singleShips">Single Ships</Link>
      <Link className={styles.link} to="/people">Single People</Link>
      <Link className={styles.link} to="/singleeople">Single People</Link>
    </div>
  );
};

export default Navbar;
