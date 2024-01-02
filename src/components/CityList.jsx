/* eslint-disable react/prop-types */
import { useCities } from "../context/CityContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
export default function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <div key={city.id}>
          <CityItem
            city={city}
            key={city.id}
          />
        </div>
      ))}
    </ul>
  );
}
