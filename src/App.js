import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import HomePage from './pages/HomePage';
import TutorProfilesPage from './pages/TutorProfilesPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import TestimonialPage from './pages/TestimonialPage';
import PricingPage from './pages/PricingPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage'; 
import LiveChat from './pages/LiveChatPage'; 


const App = () => {
  return (
    <Router>
      <Navbar />  {/* Render the Navbar at the top */}
      
      <Routes>
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/tutors" element={<TutorProfilesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/team" element={<MeetTheTeamPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/LiveChat" element={<LiveChat />} />

      </Routes>
      
      <Footer />  {/* Render the Footer at the bottom */}
    </Router>
  );
};

export default App;
