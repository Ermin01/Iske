import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Iske</h1>
      </div>
      <ul className={`nav-line ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/About" onClick={closeMobileMenu}>About me</Link></li>
        <li><Link to="/Services" onClick={closeMobileMenu}>Services</Link></li>
        <li><Link to="/Contact" onClick={closeMobileMenu}>Contact</Link></li>

      </ul>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
