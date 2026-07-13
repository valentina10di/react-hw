import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("LanguageSwitcher должен использоваться внутри LanguageProvider");
  }

  const { language, toggleLanguage } = context;

  return (
    <button className={styles.button} onClick={toggleLanguage}>
      {language === "en" ? "Switch language" : "Переключить язык"}
    </button>
  );
}

export default LanguageSwitcher;