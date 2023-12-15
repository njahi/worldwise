import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
const Base_Url = "http://localhost:7000";
function App() {
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
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path='product'
          element={<Product />}
        />
        <Route
          path='pricing'
          element={<Pricing />}
        />
        <Route
          path='login'
          element={<Login />}
        />

        <Route
          path='app'
          element={<AppLayout />}>
          <Route
            index
            element={
              <CityList
                cities={cities}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='cities'
            element={
              <CityList
                cities={cities}
                isLoading={isLoading}
              />
            }
          />
          {/* <Route
            path='cities/:id'
            element={<City />}
          /> */}

          <Route
            path='countries'
            element={
              <CountryList
                cities={cities}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='form'
            element={<p>Form</p>}
          />
        </Route>
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
