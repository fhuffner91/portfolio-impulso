
import WelcomeSection from './components/WelcomeSection';
import ProjectsSection from './components/ProjectsSection';
import { GlobalStyles } from './styles/Global';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    
    <Navbar />
    <WelcomeSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
    <GlobalStyles />
    
    
    </>
  );
}

export default App;
