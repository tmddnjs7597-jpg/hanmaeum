import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AboutPage from "../pages/about/page";
import ChairmanGreetingPage from "../pages/about/greeting/page";
import HistoryPage from "../pages/about/history/page";
import ProjectsPage from "../pages/projects/page";
import ActivitiesPage from "../pages/activities/page";
import ApplyPage from "../pages/apply/page";
import BlogPage from "../pages/blog/page";
import GalleryPage from "../pages/gallery/page";

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
    path: "/about/greeting",
    element: <ChairmanGreetingPage />,
  },
  {
    path: "/about/history",
    element: <HistoryPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/activities",
    element: <ActivitiesPage />,
  },
  {
    path: "/apply",
    element: <ApplyPage />,
  },
  {
    path: "/apply/guide",
    element: <ApplyPage />,
  },
  {
    path: "/apply/form",
    element: <ApplyPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;