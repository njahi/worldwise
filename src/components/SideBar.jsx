import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
    </div>
  );
}
