import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
import { Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          copyright {new Date().getFullYear()}by WorldWise inc.
        </p>
      </footer>
    </div>
  );
}
