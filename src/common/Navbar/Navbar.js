import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)

    // const handleClick = () => setClick(!click)
    // const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
      <div className='logo'>
            <img src='/images/Ascentia_01.png' alt='' style={{ width: '40%' }}/>
          </div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links a"} 
        onClick={() => setIsMobile(false)}>
                
            <Link to='/' className='home'>
                <li>Home</li>
            </Link>
                    
            <Link to='/about' className="about">
                <li>About us</li>
            </Link>
            <Link to='/products' className="product">
               <li>Product</li>
            </Link>
            <Link to='/media' className="media">
             <li>Media</li>
            </Link>
            <Link to='/contact' className="contact">
               <li>Contact</li>
            </Link>
            <Link to='/career' className="career">
              <li>Career</li>
            </Link>
                   
           
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
                <i className="fas fa-times"></i>
            ) : (
                <i className="fas fa-bars"></i>
            )}

        </button>
      </nav>
    </>
  );
}

export default Navbar;