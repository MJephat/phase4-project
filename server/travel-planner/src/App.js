import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Services from "./components/Services.js";
import About from "./components/About.js";
import Body from "./components/Hotel.js";
import Footer from './components/Footer/footer';
import Header from './components/Header';
// import TravellerForm from "./components/TravellerForm.js";
import './App.css';
import Contact from "./components/Contact.js";
import Menu from "./components/Places.js";
import Test from "./components/Test.js";

function App() {
  return (
    <Router>
      <Navbar />
    
    
      <Routes>
        <Route path='/' element ={<Header /> } />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/body' element ={<Body />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/travellerform' element={<TravellerForm />} /> */}
        <Route path='/menu' element={<Menu />} />
        <Route path='/test' element={<Test />} />
      
      
      </Routes>
      
      <Footer />
      
    </Router>
  );
}

export default App;

