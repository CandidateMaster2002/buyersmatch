import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyersMatchLandingPage from './components/BuyersMatchLandingPage';
import BlogPage from './pages/BlogPage';
import BlogsListPage from './pages/BlogsListPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Login from './clientportal/Login';
import Dashboard from './clientportal/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuyersMatchLandingPage />} />
        <Route path="/cp/login" element={<Login />} />
        <Route path="/cp" element={<Dashboard />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/blogs" element={<BlogsListPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
