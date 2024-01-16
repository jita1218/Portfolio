
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Qlf from './components/Qlf/Qlf';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// Update import statements in your code
// import skill from './components/skill/Skill';


const App = () => {
  return(
    <>
    <Header/>
    <About/>
    <Skill/>
    <Qlf/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
