/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

export default function CountryItem({ city }) {
  const { emoji, country } = city;
  return (
    <li>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.country}>{country}</span>
    </li>
  );
}
