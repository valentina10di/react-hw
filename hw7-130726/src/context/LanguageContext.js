import { createContext, useState } from "react";

const LanguageContext = createContext(undefined);

// function LanguageProvider({ children }) {
//     const[language, setLaungage] = useState(en);

//     const toggleLanguage = () => {
//     setLanguage((prevLang) => (prevLang === "en" ? "ru" : "en"));
//   };

//   return(
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//         {children}
//     </LanguageContext.Provider>
//   )

// }

export default LanguageContext;