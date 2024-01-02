import { createContext, useState, useEffect, useContext } from "react";

const CityContext = createContext();
const Base_Url = "http://localhost:9000";
function CitiesProvider({ children }) {
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
  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
      }}>
      {children}
    </CityContext.Provider>
  );
}
function useCities() {
  const context = useContext(CityContext);
  return context;
}
export { CitiesProvider, useCities };
