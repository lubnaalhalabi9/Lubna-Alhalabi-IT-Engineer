import React from 'react';
import Header from './layout/Header';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import SkillsSection from './pages/SkillsSection';
import ProjectsSection from './pages/ProjectsSection';
import Footer from './layout/Footer';
import ContactSection from './pages/ContactSection'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-dark-purple to-dark-blue">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/404" element={<NotFound/>}/>
        <Route path="*" element={<Navigate to={"/404"}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;