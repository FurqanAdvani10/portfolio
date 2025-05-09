import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import './header.css';
// import logo from '../../assets/logo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/work' },
    { label: 'Services', path: '/Services' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // close menu on navigation
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top 
        ${scrolled ? 'scrolled' : ''} 
        ${animate ? 'animate-navbar' : ''}`}
    >
      <div className="container">
        <div className="navbar-logo" onClick={() => handleNavigation('/')}>
          <h3 className='p-0 m-0'>furqan.</h3>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto align-items-center">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
          </ul>
          <div className="navbar-icons">
              <button className="btn btn-outline-primary" onClick={() => handleNavigation('/contact')}>
                Download CV
              </button>
            </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Header;
