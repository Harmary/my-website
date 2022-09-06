import './App.css';
import './components/Navbar'
import { Banner } from './components/Banner';
import { NavBar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects'
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>  
    <Banner></Banner>
    <Skills></Skills>
    <Projects></Projects>
    <Footer></Footer>
    </div>
  );
}

export default App;
