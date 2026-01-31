import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { blindsServices } from '../data/services';
import SEO from '../components/SEO';
import { localBusinessSchema, generateBreadcrumbSchema, combineSchemas } from '../data/schema';
import './Services.css';

const whyChoose = [
  { icon: '🏭', title: 'In-House Manufacturing', desc: 'We make every blind ourselves – no imports or reselling' },
  { icon: '🎨', title: 'Wide Variety', desc: 'Extensive range of materials, colours, and styles' },
  { icon: '🔧', title: 'Professional Installation', desc: 'Expert fitting by our trained technicians' },
  { icon: '🛠️', title: 'Repairs & Servicing', desc: 'We fix and maintain all blind types' },
  { icon: '📦', title: 'Spare Parts', desc: 'Large parts inventory for quick repairs' },
];

export default function Blinds() {
  const blindsSchema = combineSchemas(
    localBusinessSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blinds', url: '/blinds' },
    ])
  );

  return (
    <main className="services-page">
      <SEO
        title="Custom Blinds Krugersdorp | Blinds Manufacturer South Africa"
        description="Custom blinds manufactured in-house in Krugersdorp. Vertical blinds, venetian blinds, wooden blinds, roller blinds, patio and outdoor blinds. Professional installation and repairs. Free quotes."
        keywords={[
          'custom blinds krugersdorp',
          'blinds manufacturer south africa',
          'vertical blinds gauteng',
          'venetian blinds krugersdorp',
          'wooden blinds south africa',
          'roller blinds johannesburg',
          'patio blinds',
          'outdoor blinds south africa',
          'blind repairs krugersdorp',
        ]}
        path="/blinds"
        schema={blindsSchema}
      />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb__container">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Blinds</span>
        </div>
      </div>

      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero__bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/installing-blinds.jpg"
          >
            <source src="/videos/office-blinds.mp4" type="video/mp4" />
          </video>
          <div className="services-hero__overlay"></div>
        </div>
        <div className="services-hero__content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Custom Blinds – Manufactured & Installed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            From vertical to outdoor blinds, we manufacture, install, repair, and service all types of window treatments.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="services-intro">
        <div className="services-intro__container">
          <h2>Quality Blinds Made In-House</h2>
          <p>
            Unlike many competitors, A&K manufactures blinds right here in our Krugersdorp facility.
            This means better quality control, faster turnaround, and the ability to customise
            exactly to your specifications. We don't just resell imported products – we craft them.
          </p>
          <p>
            Our blinds division offers a complete service: consultation, measurement, manufacturing,
            installation, repairs, and maintenance. We also maintain a comprehensive spare parts
            inventory, making us a one-stop solution for all your window treatment needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="services-grid-section">
        <div className="services-grid-section__container">
          <h2 className="services-grid-section__title">Our Products & Services</h2>
          <div className="services-grid">
            {blindsServices.map((service, i) => (
              <motion.article
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-card__image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-card__content">
                  <h3>{service.name}</h3>
                  <p>{service.shortDesc}</p>
                  <Link to={`/blinds/${service.id}`} className="btn btn--outline-dark">
                    Learn More
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose A&K */}
      <section className="why-choose">
        <div className="why-choose__container">
          <h2>Why Choose A&K Blinds</h2>
          <div className="why-choose__grid">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                className="why-choose__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="why-choose__icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta__container">
          <h2>Ready for custom blinds?</h2>
          <Link to="/contact" className="btn btn--white btn--lg">Request a Quote</Link>
        </div>
      </section>
    </main>
  );
}
