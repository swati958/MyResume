
import './App.css';
import HomePage from './components/HomePage/HomePage';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Projects from './components/Projects/Projects.jsx';

function App() {
//Portfolio website
//1.Navbar
//2.HomePage
//3.Tech Stack
//4.Experience
//5.Projects
  return (
   <div className='app'>
    <Navbar/>
    <HomePage/>
    <TechStack/>
    <Experience/>
    <Projects/>
   </div> 
  )
}

export default App;
