/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../context/CityContext";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const cityItem = memo(function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCities();
  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`http://localhost:5173/app/cities/${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button
          className={styles.deleteBtn}
          onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
});
export default cityItem;
