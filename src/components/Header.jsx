import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { upholsteryServices, blindsServices } from '../data/services';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleDropdownToggle = (dropdown, e) => {
    if (isMobile) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  const handleMouseEnter = (dropdown) => {
    if (!isMobile) setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveDropdown(null);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${mobileMenuOpen ? 'header--menu-open' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src="/logo.png" alt="A&K Upholstery & Blinds" />
        </Link>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            <li><Link to="/" className="header__link">Home</Link></li>

            <li
              className={`header__dropdown ${activeDropdown === 'upholstery' ? 'header__dropdown--open' : ''}`}
              onMouseEnter={() => handleMouseEnter('upholstery')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="header__link header__link--dropdown"
                onClick={(e) => handleDropdownToggle('upholstery', e)}
                aria-expanded={activeDropdown === 'upholstery'}
              >
                Upholstery
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
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
                    <Link to="/upholstery" className="btn btn--outline-dark btn--sm">View All Services</Link>
                  </div>
                </div>
              </div>
            </li>

            <li
              className={`header__dropdown ${activeDropdown === 'blinds' ? 'header__dropdown--open' : ''}`}
              onMouseEnter={() => handleMouseEnter('blinds')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="header__link header__link--dropdown"
                onClick={(e) => handleDropdownToggle('blinds', e)}
                aria-expanded={activeDropdown === 'blinds'}
              >
                Blinds
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
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
                    <Link to="/blinds" className="btn btn--outline-dark btn--sm">View All Blinds</Link>
                  </div>
                </div>
              </div>
            </li>

            <li><Link to="/gallery" className="header__link">Gallery</Link></li>
            <li><Link to="/about" className="header__link">About Us</Link></li>
            <li><Link to="/contact" className="header__link">Contact</Link></li>
          </ul>
          <Link to="/contact" className="btn btn--primary btn--lg header__mobile-cta">Get a Free Quote</Link>
        </nav>

        <Link to="/contact" className="btn btn--primary header__cta">Get a Quote</Link>

        <button
          className={`header__burger ${mobileMenuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
