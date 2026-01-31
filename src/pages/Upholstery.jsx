import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { upholsteryServices } from '../data/services';
import SEO from '../components/SEO';
import { localBusinessSchema, generateBreadcrumbSchema, combineSchemas } from '../data/schema';
import './Services.css';

const processSteps = [
  { step: 1, title: 'Get a Quote', desc: 'Contact us with your project details' },
  { step: 2, title: 'Choose Materials', desc: 'Select from our fabric library' },
  { step: 3, title: 'We Collect', desc: 'Or deliver to our workshop' },
  { step: 4, title: 'Expert Craftsmanship', desc: 'Our team works their magic' },
  { step: 5, title: 'Delivery', desc: 'Enjoy your transformed furniture' },
];

export default function Upholstery() {
  const upholsterySchema = combineSchemas(
    localBusinessSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Upholstery', url: '/upholstery' },
    ])
  );

  return (
    <main className="services-page">
      <SEO
        title="Professional Upholstery Services Krugersdorp"
        description="Expert furniture reupholstery services in Krugersdorp. Sofa reupholstery, recliner repairs, lounge suite alterations, leather repairs, and more. All work done in-house. Free quotes available."
        keywords={[
          'furniture upholstery krugersdorp',
          'sofa reupholstery south africa',
          'furniture reupholstery gauteng',
          'recliner repairs krugersdorp',
          'lounge suite alterations',
          'leather furniture repairs',
          'dining chair reupholstery',
          'office chair repairs',
        ]}
        path="/upholstery"
        schema={upholsterySchema}
      />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb__container">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Upholstery</span>
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
            poster="/images/hands-upholstering-chair.jpg"
          >
            <source src="/videos/stapling-fabric.mp4" type="video/mp4" />
          </video>
          <div className="services-hero__overlay"></div>
        </div>
        <div className="services-hero__content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Upholstery Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            From heirloom restoration to commercial refurbishment, our expert team breathes new life into your furniture.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="services-intro">
        <div className="services-intro__container">
          <h2>Expert Upholstery for All Furniture</h2>
          <p>
            At A and K, we believe quality furniture deserves a second chance. Our skilled upholsterers
            handle everything from domestic sofas and recliners to commercial office seating and
            restaurant furniture. Every piece is treated with care and attention to detail.
          </p>
          <p>
            All work is completed in-house at our Krugersdorp workshop, where our team has access
            to professional-grade equipment and materials. We don't outsource – what you see is
            what we do, and we stand behind every stitch.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid-section__container">
          <div className="services-grid">
            {upholsteryServices.map((service, i) => (
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
                  <Link to={`/upholstery/${service.id}`} className="btn btn--outline-dark">
                    Learn More
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-process">
        <div className="services-process__container">
          <h2>How It Works</h2>
          <div className="process-steps">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="process-step__number">{step.step}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta__container">
          <h2>Ready to transform your furniture?</h2>
          <Link to="/contact" className="btn btn--white btn--lg">Request a Quote</Link>
        </div>
      </section>
    </main>
  );
}
