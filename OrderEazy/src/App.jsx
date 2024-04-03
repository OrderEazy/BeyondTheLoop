import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import PartnersPage from './pages/partners';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import Layout from './components/Layout'; // This is the new layout component that includes NavBar and Footer

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage is your new landing page */}
          <Route path="/login" element={<LoginPage />} /> {/* LoginPage is now at /login */}
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
