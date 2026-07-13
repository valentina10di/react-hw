import TextDisplay from "../TextDisplay";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./MainContainer.module.css";

function MainContainer() {
  return (
    <div className={styles.container}>
      <TextDisplay />
      <LanguageSwitcher />
    </div>
  );
}

export default MainContainer;