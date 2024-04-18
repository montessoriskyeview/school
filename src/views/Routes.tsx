import { Route, Routes, createBrowserRouter, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { ErrorPage } from "./ErrorView";
import { Location } from "./Location";
import { Tuition } from "./Tuition";
import { Schedule } from "./Schedule";
import { Registration } from "./Registration";
import { Philosophy } from "./Philosophy";
import { Contact } from "./Contact";
import { useEffect } from "react";

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
        path="/location"
        element={<Location />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/tuition"
        element={<Tuition />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/schedule"
        element={<Schedule />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/philosophy"
        element={<Philosophy />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/registration"
        element={<Registration />}
        errorElement={<ErrorPage />}
      />
       <Route
        path="/contact"
        element={<Contact />}
        errorElement={<ErrorPage />}
      />
    </Routes>
  )
}


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}