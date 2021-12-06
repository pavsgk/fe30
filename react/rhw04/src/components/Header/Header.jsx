import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header () {

  return (
    <>
      <header className={styles.Header}>
        <NavLink to="/"> Shop</NavLink>
        <NavLink to="/fav">Favorites</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </header>
      <div className={styles.HeaderDummy} />
    </>
  )
}

export default Header;