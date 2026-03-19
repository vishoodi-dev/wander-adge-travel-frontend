import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../componets/layout/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SoluationsPage from "../pages/SoluationsPage";
import GetStartedPage from "../pages/GetStartedPage";
import ResearchPage from "../pages/ResearchPage";
import ReportsPage from "../pages/ReportsPage";
import BranchesPage from "../pages/BranchesPage";
import FAQPage from "../pages/FAQPage";
import ContactUsPage from "../pages/ContactUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "solutions",
        element: <SoluationsPage />,
      },
      {
        path: "get-started",
        element: <GetStartedPage />,
      },
      {
        path: "research",
        element: <ResearchPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "branches",
        element: <BranchesPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "contact",
        element: <ContactUsPage />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;