import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyersMatchLandingPage from './components/BuyersMatchLandingPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuyersMatchLandingPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/blogs" element={<div className="p-20 text-center font-bold">Blogs Listing Page (Coming Soon)</div>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
