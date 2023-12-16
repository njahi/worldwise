/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City({ cities }) {
  const { id } = useParams();
  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { cityName, emoji, date, notes } = cities;
  return (
    <div className={styles.city}>
      {cities.map((city) => (
        <>
          <div
            className={styles.row}
            key={id}>
            <h6>{city.cityName}</h6>
            <h3>
              <span>{city.emoji}</span> {city.cityName}
            </h3>
          </div>

          <div className={styles.row}>
            <h6>You went to {city.cityName} on</h6>
            <p>{formatDate(city.date || null)}</p>
          </div>
          {notes && (
            <div className={styles.row}>
              <h6>Your notes</h6>
              <p>{city.notes}</p>
            </div>
          )}

          <div className={styles.row}>
            <h6>Learn more</h6>
            <a
              href={`https://en.wikipedia.org/wiki/${cityName}`}
              target='_blank'
              rel='noreferrer'>
              Check out {cityName} on Wikipedia &rarr;
            </a>
          </div>
        </>
      ))}
    </div>
  );
}

export default City;
