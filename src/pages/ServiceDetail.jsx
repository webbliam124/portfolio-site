import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { upholsteryServices, blindsServices } from '../data/services';
import SEO from '../components/SEO';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  combineSchemas,
} from '../data/schema';
import './ServiceDetail.css';

// SEO content for each service
const seoContent = {
  // Upholstery services
  'furniture-reupholstery': {
    title: 'Furniture Reupholstery Krugersdorp | Sofa & Chair Reupholstery SA',
    description: 'Professional furniture reupholstery in Krugersdorp. Expert sofa, chair, and antique reupholstery services. Thousands of fabric options. All work done in-house. Free quotes.',
    keywords: ['furniture reupholstery krugersdorp', 'sofa reupholstery south africa', 'chair reupholstery gauteng', 'antique furniture restoration'],
  },
  'recliner-servicing': {
    title: 'Recliner Repairs & Servicing Krugersdorp | Electric Recliner Repairs',
    description: 'Expert recliner repairs and servicing in Krugersdorp. Electric, manual, and lift chair repairs. Mechanism replacement, motor repairs, and reupholstery. Free quotes.',
    keywords: ['recliner repairs krugersdorp', 'electric recliner repairs south africa', 'recliner mechanism replacement', 'lift chair servicing'],
  },
  'lounge-suite-alterations': {
    title: 'Lounge Suite Alterations Krugersdorp | Sofa Resizing & Reshaping',
    description: 'Professional lounge suite alterations in Krugersdorp. Resize, reshape, or reconfigure your sofa to fit your space. Expert craftsmanship. Free quotes.',
    keywords: ['lounge suite alterations krugersdorp', 'sofa resizing south africa', 'couch modifications gauteng', 'furniture alterations'],
  },
  'bed-boxes-headboards': {
    title: 'Custom Bed Boxes & Headboards Krugersdorp | Upholstered Beds SA',
    description: 'Custom upholstered bed boxes and headboards manufactured in Krugersdorp. Any size, storage options available. Matching bedroom furniture. Free quotes.',
    keywords: ['custom headboards krugersdorp', 'upholstered bed bases south africa', 'bed boxes gauteng', 'custom beds krugersdorp'],
  },
  'furniture-repairs': {
    title: 'Furniture Repairs Krugersdorp | Frame Repairs & Restoration',
    description: 'Professional furniture repairs in Krugersdorp. Frame repairs, joint repairs, and antique restoration. Extend your furniture\'s lifespan. Free quotes.',
    keywords: ['furniture repairs krugersdorp', 'furniture frame repairs south africa', 'antique furniture restoration gauteng', 'chair repairs'],
  },
  'leather-repairs': {
    title: 'Leather Furniture Repairs Krugersdorp | Leather Restoration SA',
    description: 'Specialist leather furniture repairs in Krugersdorp. Crack repairs, colour restoration, reconditioning, and scratch removal. Free quotes.',
    keywords: ['leather repairs krugersdorp', 'leather furniture restoration south africa', 'leather colour restoration', 'leather couch repairs'],
  },
  'dining-chairs': {
    title: 'Dining Chair Reupholstery Krugersdorp | Chair Set Restoration SA',
    description: 'Expert dining chair reupholstery in Krugersdorp. Set matching, volume pricing for large sets. Quick turnaround. All styles catered for. Free quotes.',
    keywords: ['dining chair reupholstery krugersdorp', 'chair restoration south africa', 'dining set reupholstery gauteng', 'antique chair restoration'],
  },
  'office-chairs': {
    title: 'Office Chair Repairs Krugersdorp | Commercial Chair Servicing SA',
    description: 'Professional office chair repairs and reupholstery in Krugersdorp. Commercial contracts available. All chair types serviced. Free quotes.',
    keywords: ['office chair repairs krugersdorp', 'commercial chair servicing south africa', 'office chair reupholstery gauteng', 'ergonomic chair repairs'],
  },
  // Blinds services
  'vertical-blinds': {
    title: 'Vertical Blinds Krugersdorp | Custom Vertical Blinds South Africa',
    description: 'Custom vertical blinds manufactured in Krugersdorp. Fabric, PVC, and aluminium options. Wide widths up to 5m. Professional installation. Free quotes.',
    keywords: ['vertical blinds krugersdorp', 'custom vertical blinds south africa', 'office blinds gauteng', 'sliding door blinds'],
  },
  'venetian-blinds': {
    title: 'Venetian Blinds Krugersdorp | Aluminium Blinds South Africa',
    description: 'Quality aluminium venetian blinds manufactured in Krugersdorp. 25mm and 50mm slats. Wide colour range. Motorisation available. Free quotes.',
    keywords: ['venetian blinds krugersdorp', 'aluminium blinds south africa', 'metal blinds gauteng', 'office venetian blinds'],
  },
  'wooden-blinds': {
    title: 'Wooden Blinds Krugersdorp | Real Wood & Faux Wood Blinds SA',
    description: 'Natural wooden blinds and faux wood blinds in Krugersdorp. Real bass wood and moisture-resistant options. Beautiful finishes. Free quotes.',
    keywords: ['wooden blinds krugersdorp', 'wood blinds south africa', 'faux wood blinds gauteng', 'bass wood blinds'],
  },
  'roller-blinds': {
    title: 'Roller Blinds Krugersdorp | Blockout & Sunscreen Blinds SA',
    description: 'Custom roller blinds manufactured in Krugersdorp. Blockout, translucent, and sunscreen fabrics. Motorisation available. Free quotes.',
    keywords: ['roller blinds krugersdorp', 'blockout blinds south africa', 'sunscreen blinds gauteng', 'motorised roller blinds'],
  },
  'patio-blinds': {
    title: 'Patio Blinds Krugersdorp | Outdoor Patio Blinds South Africa',
    description: 'Durable patio blinds for outdoor entertainment areas in Krugersdorp. PVC clear, canvas, and mesh options. Weather protection. Free quotes.',
    keywords: ['patio blinds krugersdorp', 'outdoor blinds south africa', 'clear pvc blinds gauteng', 'weather blinds'],
  },
  'outdoor-blinds': {
    title: 'Outdoor Blinds Krugersdorp | Commercial Outdoor Blinds SA',
    description: 'Heavy-duty outdoor blinds for commercial and residential applications in Krugersdorp. Weather-resistant materials. Professional installation. Free quotes.',
    keywords: ['outdoor blinds krugersdorp', 'commercial outdoor blinds south africa', 'industrial blinds gauteng', 'restaurant blinds'],
  },
  'repairs-servicing': {
    title: 'Blind Repairs Krugersdorp | All Brands Serviced South Africa',
    description: 'Expert blind repairs and servicing in Krugersdorp. All blind types and brands repaired. Cord replacement, mechanism repairs, motor repairs. Free quotes.',
    keywords: ['blind repairs krugersdorp', 'blind servicing south africa', 'venetian blind repairs gauteng', 'roller blind repairs'],
  },
  'spare-parts': {
    title: 'Blind Spare Parts Krugersdorp | Blinds Components South Africa',
    description: 'Extensive range of blind spare parts and components in Krugersdorp. Chains, cords, slats, brackets, motors. Trade and public welcome. Nationwide delivery.',
    keywords: ['blind spare parts krugersdorp', 'blinds components south africa', 'vertical blind parts gauteng', 'venetian blind spares'],
  },
};

export default function ServiceDetail({ type }) {
  const { serviceId } = useParams();
  const services = type === 'upholstery' ? upholsteryServices : blindsServices;
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <main className="service-detail">
        <SEO
          title="Service Not Found"
          description="The requested service could not be found."
          path={`/${type}/${serviceId}`}
          noIndex={true}
        />
        <div className="service-detail__not-found">
          <h1>Service Not Found</h1>
          <Link to={`/${type}`} className="btn btn--primary">View All {type === 'upholstery' ? 'Upholstery' : 'Blinds'} Services</Link>
        </div>
      </main>
    );
  }

  const relatedServices = services.filter(s => s.id !== serviceId).slice(0, 3);
  const seo = seoContent[serviceId] || {
    title: `${service.name} | A and K Krugersdorp`,
    description: service.shortDesc,
    keywords: [],
  };

  const serviceDetailSchema = combineSchemas(
    generateServiceSchema(service, type),
    generateFAQSchema(service.faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: type === 'upholstery' ? 'Upholstery' : 'Blinds', url: `/${type}` },
      { name: service.name, url: `/${type}/${serviceId}` },
    ])
  );

  return (
    <main className="service-detail">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path={`/${type}/${serviceId}`}
        schema={serviceDetailSchema}
      />

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
