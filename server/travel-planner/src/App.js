// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import About from './components/About';
// import Services from './components/Services';
// import Footer from './components/Footer';
// import './App.css';
// import Menu from './components/Places';
// // import HOTEL from './components/Hotel';

// function App() {
//   return (
//     <div className='app'>
//       <Navbar />
//       <Header />
//       {/* <HOTEL /> */}
//       <Menu />
//       <About />
//       <Services />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React,{useState, useEffect} from "react";

function App() {
  const[data,setData] = useState([{}])

  useEffect(() =>{
    fetch("/hotels").then(
      res => res.json()
      ).then(
        data=>{
            setData(data)
            console.log(data);
        }
      )
  },[])
  return(
    <div>
      {(typeof data.hotels === "undefined") ? (
        <p>Loading...</p>
      ):(
          data.hotels.map((hotel, i) => (
            <p key={i}>{hotel}</p>

        ))
      )}
    </div>
  )
}
export default App
