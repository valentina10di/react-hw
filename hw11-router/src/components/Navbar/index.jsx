import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li>
                    <Link to='/' className={styles.navLink}>Главная</Link>
                </li>
                <li>
                    <Link to='/articleList' className={styles.navLink}>Статьи</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;