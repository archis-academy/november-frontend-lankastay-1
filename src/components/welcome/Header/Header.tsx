import React from "react";
import "./Header.scss";


const Header: React.FC = () => {
 return (
   <header className="header">
     <div className="header-container">
       <div className="logo">
         <span className="highlight">Lanka</span>Stay.
       </div>
       <nav className="nav-links">
         <ul>
           <li><a href="#home" className="active">Home</a></li>
           <li><a href="#hotels">Hotels</a></li>
           <li><a href="#rooms">Rooms</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#contact">Contact</a></li>
         </ul>
       </nav>
       <button className="login-button">Login</button>
     </div>
   </header>
 );
};

export default Header;

