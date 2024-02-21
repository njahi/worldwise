import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CitiesProvider } from "./context/CityContext";
import { AuthProvider } from "./context/fakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// import Product from "./pages/Product";
// import HomePage from "./pages/HomePage";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
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
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }>
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
                element={<CityList />}
              />
              <Route
                path='cities/:id'
                element={<City />}
              />

              <Route
                path='countries'
                element={<CountryList />}
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
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
