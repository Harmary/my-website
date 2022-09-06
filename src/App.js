import './App.css';
import './components/Navbar'
import { Banner } from './components/Banner';
import { NavBar } from './components/Navbar';
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>  
    <Banner></Banner>
    <Skills></Skills>
    </div>
  );
}

export default App;
