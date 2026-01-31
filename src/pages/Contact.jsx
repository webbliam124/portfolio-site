import { useState } from 'react';
import { motion } from 'motion/react';
import './Contact.css';

const WEB3FORMS_KEY = 'bb34cb2d-db3f-4b5f-a31d-2a736380d188';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Limit file size to 5MB
    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }
    setFile(selectedFile);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = new FormData();
      data.append('access_key', WEB3FORMS_KEY);
      data.append('subject', `New Enquiry: ${formData.service} - ${formData.name}`);
      data.append('from_name', 'A&K Website');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('service', formData.service);
      data.append('message', formData.message);

      if (file) {
        data.append('attachment', file);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setFile(null);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb__container">
          <a href="/">Home</a>
          <span>/</span>
          <span>Contact</span>
        </div>
      </div>

      <section className="contact-page__content">
        <div className="contact-page__container">
          <motion.div
            className="contact-page__info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Get in Touch</h1>
            <p>
              Ready to transform your furniture or get custom blinds? We'd love to hear from you.
              Reach out via phone, WhatsApp, email, or fill in the enquiry form.
            </p>

            <div className="contact-page__details">
              <div className="contact-page__item">
                <div className="contact-page__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:0119554085">011 955 4085</a>
                </div>
              </div>

              <div className="contact-page__item">
                <div className="contact-page__icon contact-page__icon--whatsapp">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/27828592123">+27 82 859 2123</a>
                </div>
              </div>

              <div className="contact-page__item">
                <div className="contact-page__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:sales@aandkblinds.co.za">sales@aandkblinds.co.za</a>
                </div>
              </div>

              <div className="contact-page__item">
                <div className="contact-page__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Address</h4>
                  <span>172 Voortrekker Drive, Kenmare, Krugersdorp</span>
                </div>
              </div>

              <div className="contact-page__item">
                <div className="contact-page__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h4>Opening Hours</h4>
                  <span>Monday – Friday: 08:00 – 16:00</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-page__form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div className="contact-page__success">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h2>Thank you for your enquiry!</h2>
                <p>We'll be in touch within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn--primary">
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send an Enquiry</h2>

                {error && (
                  <div className="contact-form__error">
                    {error}
                  </div>
                )}

                <div className="contact-form__group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="service">Service Type *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  >
                    <option value="">Select a service...</option>
                    <option value="Upholstery">Upholstery</option>
                    <option value="Blinds">Blinds</option>
                    <option value="Both">Both</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="message">Message / Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    disabled={loading}
                  ></textarea>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="attachment">Attach Photos (optional, max 5MB)</label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="contact-form__file"
                    disabled={loading}
                  />
                  {file && (
                    <p className="contact-form__file-name">Selected: {file.name}</p>
                  )}
                  <p className="contact-form__hint">Upload photos of your furniture or windows for a more accurate quote.</p>
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--lg btn--full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-page__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.123456789!2d27.7654321!3d-26.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiUyAyN8KwNDUnNTUuNiJF!5e0!3m2!1sen!2sza!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="A&K Location"
        ></iframe>
      </section>
    </main>
  );
}
