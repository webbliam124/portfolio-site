import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { upholsteryServices, blindsServices } from '../data/services';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src="/logo.png" alt="A&K Upholstery & Blinds" />
        </Link>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            <li><Link to="/" className="header__link">Home</Link></li>

            <li
              className="header__dropdown"
              onMouseEnter={() => setActiveDropdown('upholstery')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/upholstery" className="header__link">
                Upholstery
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
              <div className={`header__mega ${activeDropdown === 'upholstery' ? 'header__mega--open' : ''}`}>
                <div className="header__mega-inner">
                  <div className="header__mega-col">
                    <span className="header__mega-title">Upholstery Services</span>
                    <ul className="header__mega-list">
                      {upholsteryServices.map(service => (
                        <li key={service.id}>
                          <Link to={`/upholstery/${service.id}`}>{service.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="header__mega-col header__mega-col--cta">
                    <p>Expert upholstery services for domestic and commercial furniture.</p>
                    <Link to="/upholstery" className="btn btn--outline-dark">View All Services</Link>
                  </div>
                </div>
              </div>
            </li>

            <li
              className="header__dropdown"
              onMouseEnter={() => setActiveDropdown('blinds')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/blinds" className="header__link">
                Blinds
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
              <div className={`header__mega ${activeDropdown === 'blinds' ? 'header__mega--open' : ''}`}>
                <div className="header__mega-inner">
                  <div className="header__mega-col">
                    <span className="header__mega-title">Blind Types</span>
                    <ul className="header__mega-list">
                      {blindsServices.slice(0, 6).map(service => (
                        <li key={service.id}>
                          <Link to={`/blinds/${service.id}`}>{service.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="header__mega-col">
                    <span className="header__mega-title">Services</span>
                    <ul className="header__mega-list">
                      {blindsServices.slice(6).map(service => (
                        <li key={service.id}>
                          <Link to={`/blinds/${service.id}`}>{service.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="header__mega-col header__mega-col--cta">
                    <p>Custom blinds manufactured and installed by our expert team.</p>
                    <Link to="/blinds" className="btn btn--outline-dark">View All Blinds</Link>
                  </div>
                </div>
              </div>
            </li>

            <li><Link to="/gallery" className="header__link">Gallery</Link></li>
            <li><Link to="/about" className="header__link">About Us</Link></li>
            <li><Link to="/contact" className="header__link">Contact</Link></li>
          </ul>
        </nav>

        <Link to="/contact" className="btn btn--primary header__cta">Get a Quote</Link>

        <button
          className={`header__burger ${mobileMenuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
