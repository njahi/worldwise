/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const CityContext = createContext();
const Base_Url = "http://localhost:9000";
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, seTIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
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
  async function getCity(id) {
    try {
      seTIsLoading(true);
      const res = await fetch(`${Base_Url}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("there was a problem loading data");
    } finally {
      seTIsLoading(false);
    }
  }
  async function createCity(newCity) {
    try {
      seTIsLoading(true);
      const res = await fetch(`${Base_Url}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setCities((cities) => [...cities, data]);
    } catch (error) {
      alert("There was a problem adding a new city");
    } finally {
      seTIsLoading(false);
    }
  }
  async function deleteCity(id) {
    try {
      seTIsLoading(true);
      await fetch(`${Base_Url}/cities/${id}`, {
        method: "DELETE",
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (error) {
      alert("There was a problem adding a new city");
    } finally {
      seTIsLoading(false);
    }
  }
  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        createCity,
        getCity,
        deleteCity,
      }}>
      {children}
    </CityContext.Provider>
  );
}
function useCities() {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("The contect was used outside the context provider");
  return context;
}
export { CitiesProvider, useCities };
