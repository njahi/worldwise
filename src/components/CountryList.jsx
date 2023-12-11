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
  const countries = cities.reduce((arr, city) => {
    // Check if the current country is not already in the result array
    if (!arr.map((el) => el.country).includes(city.country))
      // If not, add a new object with country and emoji to the result array
      return [...arr, { country: city.country, emoji: city.emoji }];
    // If the country is already in the result array, simply return the array as is
    else return arr;
  }, []);
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
