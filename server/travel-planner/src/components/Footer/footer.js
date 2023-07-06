import React from 'react';
import './footer.css';
import data from './data'
// import fb from '../Footer/logo/fb.png';
// import instagram from '../Footer/logo/instagram.png';
// import tiktok from '../Footer/logo/tiktok.png';
// import twitter from '../Footer/logo/twitter.png';
// import linkedIn from '../Footer/logo/linkedin.png';

const Footer = ()=>{
    return(
        <div className = 'footer'>
            <div className = 'sb_footer section_padding'>
                <div className = "sb_footer-links">
                    <div className = "sb_footer-links_div">
                        <h4> For Business</h4>
                        <a href='/employer'><p>Employer</p></a>
                        <a href='/healthplan'><p>Healthplan</p></a>
                        <a href='/individual'><p>individual</p></a>

                    </div>
                    <div className = "sb_footer-links_div">
                        <h4>Resources</h4>
                        <a href='/resource'><p>Resource Center</p></a>
                        <a href='/resource'><p>Testmonials</p></a>
                        <a href='/resource'><p>STV</p></a>
                    </div>
                    <div className = "sb_footer-links_div">
                        <h4>Menu1</h4>
                        <a href = "/Home"><p>Home</p></a>
                        
                        <a href = "/About"><p>About</p></a>
                        <a href = "/Explore"><p>Explore</p></a>
                    </div>  
                    <div className= "sb_footer-links_div">
                        <h4>Menu2</h4>
                        <a href = "/Gallery"><p>Gallery</p></a>
                        <a href = "/Contact"><p>Contact</p></a>
                        <a href = "/Career"><p>Career</p></a>
                    </div> 
                    <div className="sb_footer-links_div">
                        <h4>Socials</h4>
                        <div className="socialmedia">
                        {
                            data.map(item =><a key={item.id} href={item.link} target="_blank"
                            rel="noopener noreferrer">{item.icon}</a>)
                        }
                        </div>
                    </div>           
               </div>
               <hr></hr>
               <div className = "sb_footer-below">
                <div className = "sb_footer-copyright">
                    <p>{new Date().getFullYear()} TechDeck. All right reserved.</p>

                </div>
                <div className = "sb_footer-below-links">
                    <a href ="/terms"><p>Refund Policy</p></a>
                    <a href ="/privacy"><p>Privacy</p></a>
                    {/* <a href ="/security"><p>Security</p></a> */}
                    <a href ="/location"><p>Victoria Plaza - Westlands</p></a>

                </div>
               </div>
            </div>
        </div>
    )
}
export default Footer;