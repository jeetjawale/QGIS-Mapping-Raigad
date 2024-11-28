import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarHeading}>
          Raigad Map
        </Link>
        <div className={styles.navbarLinks}>
          <Link to="/" className={styles.navbarLink}>Home</Link>
          <Link target="_blank" to="/project" className={styles.navbarLink}>Project</Link>
          <Link target="_blank" to="/aboutus" className={styles.navbarLink}>About us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
