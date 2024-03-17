import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { ErrorPage } from "./ErrorView";
import { Location } from "./Location";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/school"
        element={<Home />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="location"
        element={<Location />}
        errorElement={<ErrorPage />}
      />
    </Routes>
  )
}