
import './App.css';
import data from "./data/data.json"
import Slider from "./components/slider.js"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Specifiaction from './components/Specifiaction';
import Productbar from './components/Productbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Slider start={data.banner.start} />
      <Explore/>
     <Specifiaction/>
     <Footer footer={data.footer}/>
     <Productbar/>
    </div>
  );
}

export default App;
