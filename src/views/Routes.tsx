import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { ErrorPage } from "./ErrorView";
import { Location } from "./Location";
import { Tuition } from "./Tuition";
import { Schedule } from "./Schedule";
import { Registration } from "./Registration";
import { Philosophy } from "./Philosophy";
import { Contact } from "./Contact";
import { useEffect } from "react";
import { FaqView } from "./FAQ";

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
        path="/school/location"
        element={<Location />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/school/tuition"
        element={<Tuition />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/school/schedule"
        element={<Schedule />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/school/philosophy"
        element={<Philosophy />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/school/registration"
        element={<Registration />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/school/contact"
        element={<Contact />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/school/faq"
        element={<FaqView />}
        errorElement={<ErrorPage />}
      />
      {/* default redirect to home page */}
      <Route
        path="*"
        element={<Navigate to="/school" />}
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