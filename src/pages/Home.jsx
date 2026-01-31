import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import './Home.css';

const features = [
  { icon: '🏭', title: 'In-House Manufacturing', desc: 'We build everything ourselves' },
  { icon: '🇿🇦', title: 'Nationwide Service', desc: 'Serving all of South Africa' },
  { icon: '👥', title: 'Expert Team', desc: 'Skilled craftspeople with years of experience' },
  { icon: '🎯', title: 'Two Divisions', desc: 'Complete furniture and blinds solutions' },
];

const projects = [
  { id: 1, image: '/images/hands-upholstering-chair.jpg', category: 'Upholstery' },
  { id: 2, image: '/images/installing-blinds.jpg', category: 'Blinds' },
  { id: 3, image: '/images/leather-rolls-thread.jpg', category: 'Upholstery' },
  { id: 4, image: '/images/installing-bracket.jpg', category: 'Blinds' },
  { id: 5, image: '/images/fixing-chair.jpg', category: 'Upholstery' },
  { id: 6, image: '/images/hands-screwing-detail.jpg', category: 'Upholstery' },
];

export default function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/leather-rolls-thread.jpg"
          >
            <source src="/videos/sewing-machine.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Expert Upholstery & Custom Blinds – Manufactured In-House
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            From furniture restoration to bespoke window solutions, A&K delivers quality craftsmanship across South Africa.
          </motion.p>
          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="btn btn--primary btn--lg">Get a Free Quote</Link>
            <Link to="/contact" className="btn btn--outline btn--lg">Visit Our Showroom</Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="features">
        <div className="features__container">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="features__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="features__icon">{feature.icon}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="services-overview__container">
          <motion.div
            className="services-overview__card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="services-overview__image">
              <img
                src="/images/hands-upholstering-chair.jpg"
                alt="Upholstery Services"
              />
            </div>
            <div className="services-overview__content">
              <h2>Upholstery Services</h2>
              <p>
                From heirloom restoration to complete furniture makeovers, our expert upholsterers
                breathe new life into sofas, chairs, recliners, and more. All work done in-house at
                our Krugersdorp workshop.
              </p>
              <Link to="/upholstery" className="btn btn--primary">Explore Upholstery</Link>
            </div>
          </motion.div>

          <motion.div
            className="services-overview__card services-overview__card--reverse"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="services-overview__image">
              <img
                src="/images/installing-blinds.jpg"
                alt="Blinds Division"
              />
            </div>
            <div className="services-overview__content">
              <h2>Blinds Division</h2>
              <p>
                We manufacture, install, repair, and service all types of blinds. From vertical to
                outdoor, our custom blinds are made right here – not imported. Plus, we stock an
                extensive range of spare parts.
              </p>
              <Link to="/blinds" className="btn btn--primary">Explore Blinds</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects">
        <div className="projects__container">
          <motion.div
            className="projects__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Our Recent Work</h2>
          </motion.div>
          <div className="projects__grid">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="projects__item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={project.image} alt={`${project.category} project`} />
                <span className="projects__tag">{project.category}</span>
              </motion.div>
            ))}
          </div>
          <div className="projects__cta">
            <Link to="/gallery" className="btn btn--outline-dark">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="about-teaser">
        <div className="about-teaser__container">
          <motion.div
            className="about-teaser__image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/fixing-chair.jpg"
              alt="Our team at work"
            />
          </motion.div>
          <motion.div
            className="about-teaser__content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h2>Craftsmanship You Can Trust</h2>
            <p>
              Founded by William Webb, A&K Upholstery & Blinds has built a reputation for quality
              workmanship and excellent service. Our large, skilled team brings years of combined
              experience to every project.
            </p>
            <p>
              Based in Kenmare, Krugersdorp, we serve customers across South Africa – from local
              walk-ins to nationwide delivery and installation.
            </p>
            <Link to="/about" className="link-arrow">
              Learn More About Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="contact-teaser">
        <div className="contact-teaser__container">
          <div className="contact-teaser__col">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <a href="tel:0119554085">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  011 955 4085
                </a>
              </li>
              <li>
                <a href="https://wa.me/27828592123">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="mailto:sales@aandkblinds.co.za">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  sales@aandkblinds.co.za
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-teaser__col">
            <h3>Visit Us</h3>
            <p>172 Voortrekker Drive, Kenmare, Krugersdorp</p>
            <p><strong>Mon – Fri:</strong> 08:00 – 16:00</p>
            <span className="contact-teaser__badge">Walk-ins Welcome</span>
          </div>
          <div className="contact-teaser__col contact-teaser__col--map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.123456789!2d27.7654321!3d-26.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiUyAyN8KwNDUnNTUuNiJF!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A&K Location"
            ></iframe>
          </div>
        </div>
        <div className="contact-teaser__ctas">
          <a
            href="https://maps.google.com/?q=172+Voortrekker+Drive,+Kenmare,+Krugersdorp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-dark"
          >
            Get Directions
          </a>
          <Link to="/contact" className="btn btn--primary">Send Enquiry</Link>
        </div>
      </section>
    </main>
  );
}
