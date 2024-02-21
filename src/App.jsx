import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CitiesProvider } from "./context/CityContext";
import { AuthProvider } from "./context/fakeAuthContext";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense>
            <SpinnerFullPage />
          </Suspense>
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
