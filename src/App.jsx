import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './App.css'

// Sample product data - replace with actual products
const products = [
  {
    id: 1,
    name: 'Ethereal Collection',
    category: 'Limited Edition',
    price: '$2,400',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'A masterwork of understated elegance. Crafted from the finest materials with meticulous attention to detail, this piece represents the pinnacle of artisanal craftsmanship.'
  },
  {
    id: 2,
    name: 'Midnight Opus',
    category: 'Signature',
    price: '$1,850',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    description: 'Inspired by the quiet luxury of twilight hours. Each piece is individually numbered and comes with a certificate of authenticity.'
  },
  {
    id: 3,
    name: 'Solstice Series',
    category: 'New Arrival',
    price: '$3,200',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80',
    description: 'Celebrating the turning of seasons with forms that capture light in extraordinary ways. A testament to innovative design.'
  },
  {
    id: 4,
    name: 'Atelier Classic',
    category: 'Heritage',
    price: '$1,600',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    description: 'Drawing from decades of tradition while embracing contemporary sensibilities. Timeless design meets modern functionality.'
  },
  {
    id: 5,
    name: 'Lumière Edition',
    category: 'Exclusive',
    price: '$4,500',
    image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&q=80',
    description: 'Our most ambitious creation yet. Limited to just 50 pieces worldwide, this represents the absolute zenith of our craft.'
  },
  {
    id: 6,
    name: 'Essence Pure',
    category: 'Essentials',
    price: '$980',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80',
    description: 'Stripped to its purest form. This entry point into our collection maintains the quality and attention to detail we are known for.'
  }
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here - integrate with your backend
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Header */}
      <motion.header
        className={`header ${scrolled ? 'header--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="logo">ATELIER</div>
        <nav className="nav">
          <button className="nav-link" onClick={() => scrollToSection('products')}>Collection</button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>Enquire</button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="hero">
        <motion.span
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Curated Excellence
        </motion.span>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Crafted with<br /><em>Intention</em>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A carefully curated collection of exceptional pieces,
          each telling its own story of artistry and dedication.
        </motion.p>
        <motion.button
          className="hero-cta"
          onClick={() => scrollToSection('products')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Collection
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.button>
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span>Scroll</span>
          <div className="scroll-indicator-line"></div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-eyebrow">The Collection</span>
          <h2 className="section-title">Featured <em>Works</em></h2>
        </motion.div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay"></div>
                <button className="product-quick-view">View Details</button>
              </div>
              <div className="product-content">
                <div>
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                </div>
                <span className="product-price">{product.price}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Craftsmanship"
              className="about-image"
            />
            <div className="about-image-accent"></div>
          </motion.div>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>A Legacy of <em>Excellence</em></h3>
            <p>
              Founded on the principle that exceptional quality speaks for itself,
              we have dedicated ourselves to the pursuit of perfection in every piece we create.
            </p>
            <p>
              Each work in our collection represents countless hours of meticulous craftsmanship,
              combining traditional techniques with contemporary vision to create objects of
              enduring beauty and significance.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Pieces Created</span>
              </div>
              <div className="stat">
                <span className="stat-number">40+</span>
                <span className="stat-label">Countries Reached</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="section-title">Make an <em>Enquiry</em></h2>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleFormSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your enquiry..."
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                ></textarea>
              </div>
            </div>
            <motion.button
              type="submit"
              className="form-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formSubmitted ? 'Message Sent!' : 'Send Enquiry'}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">ATELIER</div>
          <div className="footer-links">
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Pinterest</a>
            <a href="#" className="footer-link">LinkedIn</a>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>
              &times;
            </button>
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
              <div className="modal-details">
                <span className="modal-category">{selectedProduct.category}</span>
                <h3 className="modal-title">{selectedProduct.name}</h3>
                <span className="modal-price">{selectedProduct.price}</span>
                <p className="modal-description">{selectedProduct.description}</p>
                <motion.button
                  className="modal-cta"
                  onClick={() => {
                    setSelectedProduct(null)
                    scrollToSection('contact')
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enquire About This Piece
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
