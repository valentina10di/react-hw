import styles from './Contacts.module.css';
import snapchatLogo from '../../assets/Snapchat.png';
import facebookLogo from '../../assets/Facebook.png';
import xLogo from '../../assets/x_icon.png';

const Contacts = () => {
    return (
        <section className={styles.contactsSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>Контакты</h1>
                
                <div className={styles.contentWrapper}>
                   
                    <div className={styles.leftColumn}>
                        <ul className={styles.infoList}>
                            <li>8 800 000 00 00</li>
                            <li>emailexample@email.com</li>
                        </ul>

                        <form className={styles.form}>
                            <div className={styles.inputsRow}>
                                <input type="email" placeholder="Ваш email" className={styles.input} />
                                <input type="text" placeholder="Ваше имя" className={styles.input} />
                            </div>
                            <textarea placeholder="Введите сообщение" className={styles.textarea}></textarea>
                            <button type="submit" className={styles.button}>Отправить</button>
                        </form>
                    </div>

                    
                    <div className={styles.socialCard}>
                        <p className={styles.socialTitle}>Найдите нас:</p>
                        <div className={styles.socialIcons}>
                            <a href="https://snapchat.com" target="_blank" >
                                <img src={snapchatLogo} alt="Snapchat" />
                            </a>
                            <a href="https://facebook.com" target="_blank" >
                                <img src={facebookLogo} alt="Facebook" />
                            </a>
                            <a href="https://twitter.com" target="_blank" >
                                <img src={xLogo} alt="X" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contacts;