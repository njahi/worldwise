/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CountryItem
          key={city.id}
          city={city}
        />
      ))}
    </ul>
  );
}
