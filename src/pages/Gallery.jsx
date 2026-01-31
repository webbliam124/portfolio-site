import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import './Gallery.css';

const galleryItems = [
  { id: 1, image: '/images/hands-upholstering-chair.jpg', category: 'Upholstery', title: 'Chair Upholstery' },
  { id: 2, image: '/images/installing-blinds.jpg', category: 'Blinds', title: 'Blinds Installation' },
  { id: 3, image: '/images/leather-rolls-thread.jpg', category: 'Upholstery', title: 'Premium Leather Materials' },
  { id: 4, image: '/images/installing-bracket.jpg', category: 'Blinds', title: 'Bracket Installation' },
  { id: 5, image: '/images/fixing-chair.jpg', category: 'Upholstery', title: 'Chair Restoration' },
  { id: 6, image: '/images/hands-screwing-detail.jpg', category: 'Upholstery', title: 'Precision Craftsmanship' },
  { id: 7, image: '/images/corrugated-texture.jpg', category: 'Upholstery', title: 'Fabric Textures' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <main className="gallery-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb__container">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Gallery</span>
        </div>
      </div>

      <section className="gallery-page__content">
        <div className="gallery-page__container">
          <motion.div
            className="gallery-page__header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Our Work</h1>
            <p>Browse our recent upholstery and blinds projects</p>
          </motion.div>

          {/* Filter */}
          <div className="gallery-filter">
            {['All', 'Upholstery', 'Blinds'].map((cat) => (
              <button
                key={cat}
                className={`gallery-filter__btn ${filter === cat ? 'gallery-filter__btn--active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div className="gallery-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__category">{item.category}</span>
                    <h4>{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox__close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <motion.div
              className="lightbox__content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="lightbox__info">
                <span className="lightbox__category">{selectedImage.category}</span>
                <h3>{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
