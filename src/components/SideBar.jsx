import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          copyright {new Date().getFullYear()}by WorldWise inc.
        </p>
      </footer>
    </div>
  );
}
