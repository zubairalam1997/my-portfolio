import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import SkillStack from './components/SkillStack';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <SkillStack />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
