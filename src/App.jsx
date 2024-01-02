import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

function App() {
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
              <Navigate
                replace
                to='cities'
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
          <Route
            path='cities/:id'
            element={<City cities={cities} />}
          />

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
            element={<Form />}
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
