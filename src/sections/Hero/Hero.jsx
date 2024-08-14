/* eslint-disable no-unused-vars */
import styles from "./HeroStyles.module.css";
import heroImg from "../../../src/assets/mee_t.png";
import sun from "../../../src/assets/sun.svg";
import moon from "../../../src/assets/moon.svg";
import twitterLight from "../../../src/assets/twitter-light.svg";
import LinkedinLight from "../../../src/assets/linkedin-light.svg";
import InstagramLight from "../../../src/assets/instagram-dark.svg";
import twitterDark from "../../../src/assets/twitter-dark.svg";
import LinkedinDark from "../../../src/assets/linkedin-dark.svg";
import InstagramDark from "../../../src/assets/instagram-light.svg";
import cv from "../../../../Portfolio/src/assets/cv.pdf";

import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? InstagramLight : InstagramDark;
  const linkedinIcon = theme === "light" ? LinkedinLight : LinkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Muhammad</h1>
        <h2>Ataa Ur Rasool</h2>
        <br />
        <h2>Software Developer</h2>
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <img src={githubIcon} alt="Instagram icon" />
          </a> */}
          <a href="https://www.linkedin.com/in/ataa-urrasool" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing software apps for commercial businesses.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
