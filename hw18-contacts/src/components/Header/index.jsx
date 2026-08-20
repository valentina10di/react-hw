import { NavLink } from "react-router-dom";
import styles from './Header.module.css';


function Header() {

    const linkStyle = ({isActive}) => ({
        color: isActive ? '#fff' : '#ffffff80',
    })

    return (
       <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to='/' className={styles.logoLink}>
                    <h1 className={styles.logo}>Сникер - магазин</h1>
                </NavLink>

                <nav className={styles.nav}>
                    <NavLink
                        to='/'
                        className={styles.link}
                        style={linkStyle}
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to='/cart'
                        className={styles.link}
                        style={linkStyle}
                    >
                        Корзина
                    </NavLink>
                    <NavLink
                        to='/contacts'
                        className={styles.link}
                        style={linkStyle}
                    >
                        Контакты
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;