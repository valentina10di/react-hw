import styles from './Footer.module.css';

import iconFacebook from '../../assets/icons/icon-facebook.svg';
import iconTwitter from '../../assets/icons/icon-twitter.svg';
import iconInstagram from '../../assets/icons/icon-instagram.svg';

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={`${styles.flexColumn} ${styles.contacts}`}>
                    <div className={`${styles.flexColumn} ${styles.contactsWrapper}`}>
                        <h2 className={styles.title}>Контакты</h2>

                        <div className={`${styles.flexColumn} ${styles.blockPhoneEmail}`}>
                            <p className={styles.dataContact}>8 800 000 00 00</p>
                            <p className={styles.dataContact}>emailexample@email.com</p>
                        </div>
                    </div>

                    <p className={styles.rights}>&copy; {new Date().getFullYear()} Сникер-магазин. Все права защищены</p>
                </div>

                <div className={`${styles.flexColumn} ${styles.socials}`}>
                    <div className={styles.social}>
                        <a
                            href="https://www.facebook.com/?locale=ru_RU"
                            className={styles.socialLink}
                            target='_blank'
                        >
                            <img src={iconFacebook} alt="Facebook" />
                        </a>
                        <a
                            href="https://www.facebook.com/?locale=ru_RU"
                            className={styles.socialLink}
                            target='_blank'
                        >
                            <img src={iconTwitter} alt="Twitter" />
                        </a>
                        <a
                            href="https://www.facebook.com/?locale=ru_RU"
                            className={styles.socialLink}
                            target='_blank'
                        >
                            <img src={iconInstagram} alt="Instagram" />
                        </a>

                    </div>

                    <input type="email" placeholder='Введите свой email' className={styles.input} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
