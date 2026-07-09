import SocialLink from "../SocialLink";

import apple from "../../assets/apple.svg";
import appleActive from "../../assets/apple-active.svg";

import google from "../../assets/google.svg";
import googleActive from "../../assets/google-active.svg";

import xcom from "../../assets/xcom.svg";
import xcomActive from "../../assets/xcom-active.svg";

import styles from "./SocialLinks.module.css"


function SocialLinks() {
  const socialProviders = [
    {
      id: "apple",
      name: "Apple",
      href: "https://apple.com",
      defaultIcon: apple,
      hoverIcon: appleActive,
      type: "apple"
    },
    {
      id: "google",
      name: "Google",
      href: "https://google.com",
      defaultIcon: google,
      hoverIcon: googleActive,
      type: "google"
    },
    {
      id: "x",
      name: "X",
      href: "https://x.com",
      defaultIcon: xcom,
      hoverIcon: xcomActive,
      type: "x"
    },
  ];

  return (
    <div className={styles.socials}>
      {socialProviders.map((provider) => (
        <SocialLink
          key={provider.id}
          {...provider}
        />
      ))}
    </div>
  );
}

export default SocialLinks;