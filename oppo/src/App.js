
import './App.css';
import data from "./data/data.json"
import Slider from "./components/slider.js"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Explore from './components/Explore';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider start={data.banner.start} />
      <Explore/>
     <Footer footer={data.footer}/>
    </div>
  );
}

export default App;
