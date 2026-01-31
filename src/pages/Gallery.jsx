import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import './Gallery.css';

const galleryItems = [
  { id: 1, image: '/images/projects/project-01.jpg', category: 'Upholstery', title: 'Victorian Armchairs - Floral Fabric' },
  { id: 2, image: '/images/projects/project-06.jpg', category: 'Upholstery', title: 'Wingback Chair - Paisley Pattern' },
  { id: 3, image: '/images/projects/project-10.jpg', category: 'Upholstery', title: 'Antique Chair - Damask Fabric' },
  { id: 4, image: '/images/projects/project-15.jpg', category: 'Upholstery', title: 'Two-Seater Sofa - Navy Blue' },
  { id: 5, image: '/images/projects/project-20.jpg', category: 'Upholstery', title: 'Leather Recliner Sofa' },
  { id: 6, image: '/images/projects/project-25.jpg', category: 'Upholstery', title: 'Ornate Antique Chair - Black Velvet' },
  { id: 7, image: '/images/projects/project-30.jpg', category: 'Upholstery', title: 'Wingback Chair - Palm Leaf Pattern' },
  { id: 8, image: '/images/projects/project-35.jpg', category: 'Upholstery', title: 'Dining Chairs - Mustard Yellow' },
  { id: 9, image: '/images/projects/project-40.jpg', category: 'Upholstery', title: 'Victorian Chair - Blue Floral' },
  { id: 10, image: '/images/projects/project-45.jpg', category: 'Upholstery', title: 'Wingback Chair - Grey Button Tufted' },
  { id: 11, image: '/images/projects/project-02.jpg', category: 'Upholstery', title: 'Antique Chair Restoration' },
  { id: 12, image: '/images/projects/project-07.jpg', category: 'Upholstery', title: 'Armchair Reupholstery' },
  { id: 13, image: '/images/projects/project-12.jpg', category: 'Upholstery', title: 'Lounge Chair Makeover' },
  { id: 14, image: '/images/projects/project-22.jpg', category: 'Upholstery', title: 'Sofa Refurbishment' },
  { id: 15, image: '/images/projects/project-32.jpg', category: 'Upholstery', title: 'Chair Set Restoration' },
  { id: 16, image: '/images/projects/project-42.jpg', category: 'Upholstery', title: 'Classic Chair Reupholstery' },
  { id: 17, image: '/images/installing-blinds.jpg', category: 'Blinds', title: 'Blinds Installation' },
  { id: 18, image: '/images/installing-bracket.jpg', category: 'Blinds', title: 'Bracket Mounting' },
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
