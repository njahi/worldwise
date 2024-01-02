import { createContext, useState, useEffect } from "react";

const CityContext = createContext();
const Base_Url = "http://localhost:9000";
function citiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, seTIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        seTIsLoading(true);
        const res = await fetch(`${Base_Url}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("there was a problem loading data");
      } finally {
        seTIsLoading(false);
      }
    }
    fetchCities();
  }, []);
}
export { citiesProvider, useCities };
