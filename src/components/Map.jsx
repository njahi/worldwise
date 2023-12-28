import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
export default function Map() {
  // eslint-disable-next-line no-unused-vars
  const { searchParams, setSearchParams } = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h3>Map</h3>
      <h1>
        {lat}, {lng}
      </h1>
    </div>
  );
}
