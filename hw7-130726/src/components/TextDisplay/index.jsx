import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import styles from "./TextDisplay.module.css";

function TextDisplay() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("TextDisplay должен использоваться внутри LanguageProvider");
  }

  const { language } = context;

  return (
    <h1 className={styles.title}>
      {language === "en" ? "English language was chosen" : "Был выбран русский язык"}
    </h1>
  );
}

export default TextDisplay;