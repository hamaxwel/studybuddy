import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Studybuddy</h1>
          <p>Your platform for personalized learning and top-notch tutoring.</p>
           {/* Circles Section */}
      <section className="user-circles">
        <h2>Join Studybuddy as a...</h2>
        <div className="circle-container">
          <Link to="/signup" className="circle student-circle">Student</Link>
          <Link to="/signup" className="circle teacher-circle">Teacher</Link>
          <Link to="/signup" className="circle parent-circle">Parent</Link>
        </div>
      </section>
          <Link to="/tutors" className="cta-button">Find a Tutor</Link>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Studybuddy?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Experienced Tutors</h3>
            <p>Connect with certified tutors who are experts in their fields and passionate about teaching.</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Study at your own pace, with flexible schedules that fit into your lifestyle.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Resources</h3>
            <p>Access engaging resources, including quizzes, articles, and practice exercises.</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="cta">
        <h2>Get Started with Studybuddy Today!</h2>
        <p>Join our community of learners and start your journey to academic success.</p>
      </section>
    </div>
  );
};

export default HomePage;
