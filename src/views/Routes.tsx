import { Home } from './Home';
import { Location } from './Location';
import { Tuition } from './Tuition';
import { Schedule } from './Schedule';
import { Registration } from './Registration';
import { Philosophy } from './Philosophy';
import { Contact } from './Contact';
import { createContext, useContext, useState } from 'react';
import { FaqView } from './FAQ';
import { Box, Button, Chip, Stack } from '@mui/material';
import { NAVBAR_ITEMS } from '../components/appBar/DrawerContent';

export enum Page {
  HOME,
  LOCATION,
  TUITION,
  SCHEDULE,
  PHILOSOPHY,
  REGISTRATION,
  CONTACT,
  FAQ
}

interface RouteContextData {
  page: Page;
  setPage: (page: Page) => void;
}

const RouteContext = createContext<RouteContextData | undefined>(undefined);

export const useRoutes = () => {
  const context = useContext(RouteContext);

  if (!context) {
    throw new Error('RouteContext not set up properly');
  }

  return context;
};

export const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<Page>(Page.HOME);
  return (
    <RouteContext.Provider
      value={{
        page,
        setPage
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};

export const AppRoutes = () => {
  const { page } = useRoutes();

  switch (page) {
    case Page.LOCATION:
      return <Location />;
    case Page.CONTACT:
      return <Contact />;
    case Page.FAQ:
      return <FaqView />;
    case Page.TUITION:
      return <Tuition />;
    case Page.PHILOSOPHY:
      return <Philosophy />;
    case Page.REGISTRATION:
      return <Registration />;
    case Page.SCHEDULE:
      return <Schedule />;
    case Page.HOME:
    default:
      return <Home />;
  }
};
export const RouteChips = () => {
  const { setPage } = useRoutes();
  return (
    <Box
      component='div'
      sx={{
        justifyContent: 'center',
        display: 'flex'
      }}
    >
      <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap' }}>
        {NAVBAR_ITEMS.filter(item => item.link !== Page.HOME).map(item => (
          <Button onClick={() => setPage(item.link)} key={item.link}>
            <Chip label={item.text} color='primary' sx={{ margin: 0.5 }} />
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
