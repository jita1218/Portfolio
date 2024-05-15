
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Qlf from './components/Qlf/Qlf';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import SplashSection from './components/splashsection/SplashSection';
import Bio from './components/Bio/Bio';
import Projects from './components/projects/Projects';



const App = () => {
  return(
    <>
    <Header/>
   
    <About/>
    <Skill/>
    {/* <Qlf/> */}
    <Projects/>
    {/* <Bio/> */}

    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
