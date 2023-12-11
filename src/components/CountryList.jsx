/* eslint-disable react/prop-types */

import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) {
    <Message message='add you first city by clicking on the map' />;
  }
  const countries = [];
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem
          key={country.id}
          city={country}
        />
      ))}
    </ul>
  );
}
