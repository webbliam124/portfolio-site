import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { upholsteryServices, blindsServices } from '../data/services';
import './ServiceDetail.css';

export default function ServiceDetail({ type }) {
  const { serviceId } = useParams();
  const services = type === 'upholstery' ? upholsteryServices : blindsServices;
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <main className="service-detail">
        <div className="service-detail__not-found">
          <h1>Service Not Found</h1>
          <Link to={`/${type}`} className="btn btn--primary">View All {type === 'upholstery' ? 'Upholstery' : 'Blinds'} Services</Link>
        </div>
      </main>
    );
  }

  const relatedServices = services.filter(s => s.id !== serviceId).slice(0, 3);

  return (
    <main className="service-detail">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb__container">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/${type}`}>{type === 'upholstery' ? 'Upholstery' : 'Blinds'}</Link>
          <span>/</span>
          <span>{service.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="service-detail__hero">
        <div className="service-detail__hero-bg">
          <img src={service.image} alt={service.name} />
          <div className="service-detail__hero-overlay"></div>
        </div>
        <div className="service-detail__hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.name}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="service-detail__content">
        <div className="service-detail__container">
          <div className="service-detail__main">
            <motion.div
              className="service-detail__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {service.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            {/* Benefits */}
            <motion.div
              className="service-detail__benefits"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Key Benefits</h2>
              <ul>
                {service.benefits.map((benefit, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* FAQ */}
            <motion.div
              className="service-detail__faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {service.faqs.map((faq, i) => (
                  <details key={i} className="faq-item">
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="service-detail__sidebar">
            <div className="service-detail__cta-box">
              <h3>Get a Free Quote</h3>
              <p>Interested in our {service.name.toLowerCase()} service? Contact us for a free, no-obligation quote.</p>
              <Link to="/contact" className="btn btn--primary btn--full">Request a Quote</Link>
              <a href="https://wa.me/27828592123" className="btn btn--whatsapp btn--full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            <div className="service-detail__contact-info">
              <h4>Contact Us</h4>
              <ul>
                <li><a href="tel:0119554085">011 955 4085</a></li>
                <li><a href="mailto:sales@aandkblinds.co.za">sales@aandkblinds.co.za</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Services */}
      <section className="service-detail__related">
        <div className="service-detail__related-container">
          <h2>Related Services</h2>
          <div className="service-detail__related-grid">
            {relatedServices.map((related) => (
              <Link key={related.id} to={`/${type}/${related.id}`} className="related-card">
                <img src={related.image} alt={related.name} />
                <h4>{related.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
