import './App.css';
import './components/Navbar'
import { Banner } from './components/Banner';
import { NavBar } from './components/Navbar';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>  
    <Banner></Banner>
    </div>
  );
}

export default App;
