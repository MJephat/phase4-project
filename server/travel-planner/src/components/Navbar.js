import React from 'react';
// import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div class='topnav'>
            <a class="active" href='#home'>Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            {/* <Link to="/">H0TEL</Link> */}
            <a href="#HOTEL">H0TEL</a>
        </div>
    );
}

export default Navbar;