import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ContactPage from "../pages/contact/page";
import TrialPage from "../pages/trial/page";
import NewsPage from "../pages/news/page";
import NewsDetail from "../pages/news/NewsDetail";
import CampPage from "../pages/camp/page";
import AboutPage from "../pages/about/page";
import SubjectsPage from "../pages/subjects/page";
import FaqPage from "../pages/faq/page";

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
    path: "/subjects",
    element: <SubjectsPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/faculty",
    element: <Navigate to="/#teachers" replace />,
  },
  {
    path: "/teachers",
    element: <Navigate to="/#teachers" replace />,
  },
  {
    path: "/success",
    element: <Navigate to="/#success" replace />,
  },
  {
    path: "/results",
    element: <Navigate to="/#success" replace />,
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
    path: "/camp",
    element: <CampPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;