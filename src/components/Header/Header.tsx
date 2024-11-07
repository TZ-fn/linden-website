import LindenLogo from "assets/LindenLogo-removebg.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.mainContainer}>
      <a href="/">
        <div className={styles.mainLogoContainer}>
          <img src={LindenLogo} alt="Linden Home Community Logo" />
        </div>
      </a>
      <h1 className={styles.mainHeaderText}>Linden Home Community</h1>
    </header>
  );
}
