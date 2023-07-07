import React from 'react';
import {  Link } from "react-router-dom";

function Navbar(){
  // const [ find, setFind] = useState("");
    // console.log(find)

    return(
    <nav className='topnav'>
      <Link to="/about">about</Link>
      <Link to="/services">services</Link>
      <Link to="/body">Hotels</Link>
      <Link to="/contact">contact</Link>
      <Link to="travellerform">travellerform</Link>
      <Link to="/menu">menu</Link>
      <Link to="/test">Add Traveller</Link>
      <Link to="/">Home</Link>

  </nav>
  );
}
export default Navbar;

// import React, { useState } from 'react';
// // import { SignupForm } from './Signup';

// function Navbar(){
//     // const [showSignupForm, setShowSignupForm] = useState(false);

//     // const handleSignupClick = () => {
//     //     setShowSignupForm(true);
//     // };

//     // const closeSignupForm = () => {
//     //     setShowSignupForm(false);
//     // };

//     return(
//         <div class='topnav'>
//             <a class="active" href='#home'>Home</a>
//             <a href="#about">About</a>
//             <a href="#contact">Contact</a>
//             <a href="#hotel">Hotels</a>
//             {/* <a href="#" onClick={handleSignupClick}>Sign-Up</a> */}

//             {/* {showSignupForm && (
//                 <div className='modal'>
//                     <div className='modal-content' />
//                     <span className='close' onClick={closeSignupForm}>&times;</span>
//                     <SignupForm />
//                 </div>
//             )} */}
//         </div>
//     );
// }

// export default Navbar;