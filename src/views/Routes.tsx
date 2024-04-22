import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { ErrorPage } from "./ErrorView";
import { Location } from "./Location";
import { Tuition } from "./Tuition";
import { Schedule } from "./Schedule";
import { Registration } from "./Registration";
import { Philosophy } from "./Philosophy";
import { Contact } from "./Contact";
import { createContext, useContext, useEffect, useState } from "react";
import { FaqView } from "./FAQ";

export enum Page {
  HOME,
  LOCATION,
  TUITION,
  SCHEDULE,
  PHILOSOPHY,
  REGISTRATION,
  CONTACT,
  FAQ,
}

interface RouteContextData {
  page: Page;
  setPage: (page: Page) => void;
}

const RouteContext = createContext<RouteContextData | undefined>(undefined);

export const useRoutes = () => {
  const context = useContext(RouteContext);

  if (!context) {
    throw new Error("RouteContext not set up properly")
  }

  return context;
}

export const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<Page>(Page.HOME);
  return (
    <RouteContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </RouteContext.Provider>
  )
}

export const AppRoutes = () => {
  const { page } = useRoutes();

  switch (page) {
    case Page.LOCATION:
      return <Location />
    case Page.CONTACT:
      return <Contact />
    case Page.FAQ:
      return <FaqView />
    case Page.TUITION:
      return <Tuition />
    case Page.PHILOSOPHY:
      return <Philosophy />
    case Page.REGISTRATION:
      return <Registration />
    case Page.SCHEDULE:
      return <Schedule />
    case Page.HOME:
    default:
      return <Home />
  }
}