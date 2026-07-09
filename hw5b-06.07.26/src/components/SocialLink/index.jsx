import { useState } from "react";
import styles from "./SocialLink.module.css"


function SocialLink({
  href,
  name,
  defaultIcon,
  hoverIcon,
  type
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${styles.socialLink} ${styles[type]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className={`${styles.icon} ${styles[type]}`}
        src={isHovered ? hoverIcon : defaultIcon}
        alt={name}
      />
    </a>
  );
}

export default SocialLink;

