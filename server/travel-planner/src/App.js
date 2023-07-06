import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Services from "./components/Services.js";
import About from "./components/About.js";
import Body from "./components/Hotel.js";
// import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import Contact from "./components/Footer";

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
      
      </Routes>
      
      {/* <Footer /> */}
      
    </Router>
  );
}

export default App;


// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import About from './components/About';
// import Services from './components/Services';
// import Footer from './components/Footer';
// import './App.css';
// import Body from './components/Hotel';

// function App() {
//   return (
//     <div class='app'>
//       <Navbar />
//       <Header />
//       <About />
//       <Services />
//       <Footer />
//       <Body />
//     </div>
//   );
// }

// export default App;