import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header () {

  return (
    <header className={styles.Header}>
      <NavLink to="/"> Shop</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/fav">Favorites</NavLink>
    </header>
  )
}

export default Header;