import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SoluationsPage from "../pages/SoluationsPage";
import GetStartedPage from "../pages/GetStartedPage";
import ResearchPage from "../pages/ResearchPage";
import ReportsPage from "../pages/ReportsPage";
import BranchesPage from "../pages/BranchesPage";
import FAQPage from "../pages/FAQPage";
import ContactUsPage from "../pages/ContactUsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions" element={<SoluationsPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}