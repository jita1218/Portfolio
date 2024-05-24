
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Bio from './components/Bio/Bio';
import Projects from './components/projects/Projects';



const App = () => {
  return(
    <>
    <Header/>
   
    <About/>
    <Skill/>
    <Projects/>
    <Bio/>

    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
