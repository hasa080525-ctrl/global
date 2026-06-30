import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import TeachersPage from "../pages/teachers/page";
import ResultsPage from "../pages/results/page";
import AboutPage from "../pages/about/page";
import ContactPage from "../pages/contact/page";
import TrialPage from "../pages/trial/page";
import NewsPage from "../pages/news/page";
import NewsDetail from "../pages/news/NewsDetail";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/faculty",
    element: <TeachersPage />,
  },
  {
    path: "/teachers",
    element: <TeachersPage />,
  },
  {
    path: "/success",
    element: <ResultsPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/trial",
    element: <TrialPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/news/:id",
    element: <NewsDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;