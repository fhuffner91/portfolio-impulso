import { Navbar } from './components/Navbar/styles';
import WelcomeSection from './components/WelcomeSection';
import ProjectsSection from './components/ProjectsSection';
import { GlobalStyles } from './styles/Global';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
    
    <Navbar />
    <WelcomeSection />
    <ProjectsSection />
    <ContactSection />
    <GlobalStyles />
    
    </>
  );
}

export default App;
