import styles from "./Button.module.css";
export default function Button({ children, onClick, type }) {
  return (
    <button
      onClick={(e) => {}}
      className={styles.btn}>
      {children}
    </button>
  );
}
