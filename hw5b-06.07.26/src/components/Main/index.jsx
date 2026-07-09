import styles from "./Main.module.css";
import SocialLinks from "../SocialLinks";

function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        LIFE IS WASTED ON THE LIVING
      </h1>

      <p className={styles.subtitle}>
        Sign in <br /> with
      </p>

      <div className={styles.socials}>
        <SocialLinks />
      </div>
    </main>
  );
}

export default Main;