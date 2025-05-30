
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Bio from './components/Bio/Bio';
import Projects from './components/projects/Projects';
import Collab from './collab/Collab';


const App = () => {
  return(
    <>
    <Header/>
   
    <About/>
    <Skill/>
    <Projects/>
    <Bio/>
    <Collab/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
