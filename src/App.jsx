import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { CitiesProvider } from "@contexts/CitiesContext";
import { AuthProvider } from "@contexts/FakeAuthContext";
import ProtectedRoute from "@screens/Protected/ProtectedRoute";

import CityList from "@components/City";
import CountryList from "@components/CountryList";
import City from "@components/City/City";
import Form from "@components/Form";
import SpinnerFullPage from "@components/Spinner/SpinnerFullPage";

// import HomePage from "@screens/Home";
// import Pricing from "@screens/Pricing";
// import ProductCard from "@screens/Product";
// import ErrorPage from "@screens/Error";
// import AppLayout from "@screens/Layout";
// import Login from "@screens/Login";

const HomePage = lazy(() => import("@screens/Home"));
const ProductCard = lazy(() => import("@screens/Product"));
const Login = lazy(() => import("@screens/Login"));
const Pricing = lazy(() => import("@screens/pricing"));
const AppLayout = lazy(() => import("@screens/Layout"));
const ErrorPage = lazy(() => import("@screens/Error"));

// dist/assets/index-DrqSRePp.css   30.48 kB │ gzip:   5.06 kB
// dist/assets/index-TrGiEIP5.js   508.73 kB │ gzip: 148.88 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="product" element={<ProductCard />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
