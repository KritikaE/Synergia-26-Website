import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { StallsPage } from './pages/StallsPage';
import { SchedulePage } from './pages/SchedulePage';
import { StartupHubPage } from './pages/StartupHubPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { ContactPage } from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/events',
    Component: EventsPage,
  },
  {
    path: '/stalls',
    Component: StallsPage,
  },
  {
    path: '/schedule',
    Component: SchedulePage,
  },
  {
    path: '/startup-hub',
    Component: StartupHubPage,
  },
  {
    path: '/sponsors',
    Component: SponsorsPage,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
]);
