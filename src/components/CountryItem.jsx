/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

export default function CountryItem({ city }) {
  const { emoji, country } = city;
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{country}</span>
    </li>
  );
}
