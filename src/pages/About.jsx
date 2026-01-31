import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { localBusinessSchema, generateBreadcrumbSchema, combineSchemas } from '../data/schema';
import './About.css';

const values = [
  { icon: '🎯', title: 'Quality Craftsmanship', desc: 'Every project receives meticulous attention to detail and expert execution.' },
  { icon: '🤝', title: 'Customer Service', desc: 'We listen to your needs and deliver solutions that exceed expectations.' },
  { icon: '💎', title: 'Honest Pricing', desc: 'Transparent quotes with no hidden costs. What we quote is what you pay.' },
  { icon: '📚', title: 'Expert Knowledge', desc: 'Years of combined experience to guide you through every decision.' },
];

export default function About() {
  const aboutSchema = combineSchemas(
    localBusinessSchema,
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
    ])
  );

  return (
    <main className="about-page">
      <SEO
        title="About A&K | Krugersdorp Upholstery & Blinds Workshop"
        description="Learn about A&K Upholstery & Blinds - founded by William Webb in Krugersdorp. Meet our skilled team of craftspeople and discover why we're trusted across South Africa for quality upholstery and blinds."
        keywords={[
          'about a&k upholstery',
          'krugersdorp workshop',
          'upholstery team south africa',
          'furniture craftsmen krugersdorp',
          'blinds manufacturer gauteng',
        ]}
        path="/about"
        schema={aboutSchema}
      />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb__container">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="about-intro">
        <div className="about-intro__container">
          <motion.div
            className="about-intro__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About A&K</h1>
            <p>
              A&K Upholstery & Blinds was founded by William Webb with a simple vision: to provide
              South Africans with quality craftsmanship they can trust. Based in Kenmare,
              Krugersdorp, we've built our reputation on skilled workmanship, honest pricing, and
              exceptional customer service.
            </p>
            <p>
              What makes us different? We do everything in-house. Our upholstery workshop and blinds
              manufacturing facility operate under one roof, giving us complete control over quality
              and turnaround times. We don't outsource, and we don't resell imported products – when
              you work with A&K, you're getting the real thing.
            </p>
            <p>
              Our two specialist divisions – upholstery and blinds – complement each other perfectly.
              Whether you're refreshing a single armchair or outfitting an entire office building,
              we have the expertise and capacity to deliver.
            </p>
          </motion.div>
          <motion.div
            className="about-intro__image"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/projects/project-01.jpg"
              alt="A&K Craftsmanship"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-team__container">
          <motion.div
            className="about-team__image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/team-william.jpg"
              alt="William Webb and team member at the A&K workshop"
            />
          </motion.div>
          <motion.div
            className="about-team__content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>Meet the Team Behind the Craft</h2>
            <p>
              Our strength lies in our people. A&K employs a large team of skilled craftspeople,
              upholsterers, and blind technicians – each bringing years of experience and a passion
              for their trade.
            </p>
            <p>
              From the initial consultation through to final delivery, you'll work with professionals
              who take pride in their work. Our team members are trained not just in technique, but
              in understanding what our customers need and delivering it right the first time.
            </p>
            <p>
              Whether it's a delicate antique restoration or a high-volume commercial project, our
              team has the skills and experience to handle it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values__container">
          <h2>Our Values</h2>
          <div className="about-values__grid">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="value-card__icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="about-showroom">
        <div className="about-showroom__container">
          <motion.div
            className="about-showroom__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Visit Our Showroom</h2>
            <p>
              There's no substitute for seeing and touching materials in person. Our Krugersdorp
              showroom features an extensive range of fabric swatches, leather samples, and blind
              displays to help you make the perfect choice.
            </p>
            <p>
              Walk-ins are welcome during business hours. Our friendly team will guide you through
              your options, take measurements if needed, and provide an on-the-spot quote for your
              project.
            </p>
            <div className="about-showroom__details">
              <div>
                <h4>Address</h4>
                <p>172 Voortrekker Rd, Kenmare, Krugersdorp</p>
              </div>
              <div>
                <h4>Hours</h4>
                <p>Monday – Friday: 08:00 – 16:00</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn--primary">Get Directions</Link>
          </motion.div>
          <motion.div
            className="about-showroom__image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Our Showroom"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta__container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free, no-obligation quote.</p>
          <Link to="/contact" className="btn btn--white btn--lg">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
