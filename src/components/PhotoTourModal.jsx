import React, { useEffect } from 'react';
import { ArrowLeft, Share, Heart } from 'lucide-react';
import { photoCategories } from '../data/listingData';

export default function PhotoTourModal({ isOpen, onClose, onSelectPhoto, isSaved, onToggleSave }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="photo-tour-overlay">
      {/* Sticky Header */}
      <div className="tour-header">
        <button className="tour-back-btn" onClick={onClose} aria-label="Close photo tour">
          <ArrowLeft size={20} />
        </button>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="action-btn">
            <Share size={16} /> Share
          </button>
          <button className="action-btn" onClick={onToggleSave}>
            <Heart size={16} fill={isSaved ? "#FF385C" : "none"} color={isSaved ? "#FF385C" : "currentColor"} />
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
      </div>

      {/* Categorized Photo Content */}
      <div className="tour-content">
        <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '32px' }}>Photo tour</h1>

        {photoCategories.map((cat, catIdx) => (
          <div key={catIdx} className="tour-category-section" id={`cat-${catIdx}`}>
            <h2 className="category-title">{cat.name}</h2>
            <div className="category-desc">{cat.description}</div>

            <div className="category-grid">
              {cat.images.map((img, imgIdx) => (
                <div 
                  key={img.id || imgIdx} 
                  className="tour-photo-card"
                  onClick={() => onSelectPhoto(img.id - 1)}
                  role="button"
                  tabIndex={0}
                >
                  <img src={img.url} alt={img.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
