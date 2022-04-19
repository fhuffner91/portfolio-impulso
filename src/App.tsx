import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/styles';
import WelcomeSection from './components/WelcomeSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <>
    
    <Navbar />
    <WelcomeSection />
    <ProjectsSection />
    
    </>
  );
}

export default App;
