import styles from "./Logo.module.css";

import spotify from "../../assets/spotify.svg";

function Logo(){

    return(
        
        <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.logo}
        >

            <img src={spotify} alt="Spotify"/>

        </a>
       
    )

}

export default Logo;