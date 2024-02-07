import './App.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import SkillStack from './components/SkillStack';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Layout >
      <Home />
      <About />
      <Portfolio />
      <SkillStack />
      <Contact />
      <SocialLinks />
      </Layout >
    </div>
  );
}

export default App;
