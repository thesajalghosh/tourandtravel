import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;