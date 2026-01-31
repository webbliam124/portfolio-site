import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import './Gallery.css';

const galleryItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', category: 'Upholstery', title: 'Sofa Reupholstery' },
  { id: 2, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80', category: 'Blinds', title: 'Vertical Blinds Installation' },
  { id: 3, image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80', category: 'Upholstery', title: 'Living Room Suite' },
  { id: 4, image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=800&q=80', category: 'Blinds', title: 'Roller Blinds' },
  { id: 5, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80', category: 'Upholstery', title: 'Custom Headboard' },
  { id: 6, image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80', category: 'Blinds', title: 'Wooden Blinds' },
  { id: 7, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80', category: 'Upholstery', title: 'Recliner Restoration' },
  { id: 8, image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80', category: 'Blinds', title: 'Venetian Blinds' },
  { id: 9, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80', category: 'Upholstery', title: 'Dining Chairs Set' },
  { id: 10, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', category: 'Blinds', title: 'Patio Blinds' },
  { id: 11, image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80', category: 'Upholstery', title: 'Leather Repair' },
  { id: 12, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', category: 'Blinds', title: 'Outdoor Blinds' },
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
