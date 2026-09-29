import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Share, Heart } from 'lucide-react';

export default function LightboxModal({ isOpen, images, activeIndex, onClose, onPrev, onNext, isSaved, onToggleSave }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[activeIndex] || images[0];

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true">
      {/* Lightbox Header */}
      <div className="lightbox-header">
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close photo viewer">
          <X size={18} /> Close
        </button>

        <div className="lightbox-counter">
          {activeIndex + 1} / {images.length}
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="action-btn" style={{ color: 'white' }}>
            <Share size={16} />
          </button>
          <button className="action-btn" onClick={onToggleSave} style={{ color: 'white' }}>
            <Heart size={16} fill={isSaved ? "#FF385C" : "none"} color={isSaved ? "#FF385C" : "white"} />
          </button>
        </div>
      </div>

      {/* Main Lightbox Stage */}
      <div className="lightbox-stage">
        {/* Previous Button */}
        <button 
          className="lightbox-nav-btn" 
          onClick={onPrev} 
          aria-label="Previous photo"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Display Image & Caption */}
        <div className="lightbox-image-wrap">
          <img 
            src={currentImage.url} 
            alt={currentImage.caption || currentImage.title} 
          />
          <div className="lightbox-caption">
            {currentImage.caption || `${currentImage.category || 'Listing Photo'} · Romantic Jacuzzi 1BHK Candolim`}
          </div>
        </div>

        {/* Next Button */}
        <button 
          className="lightbox-nav-btn" 
          onClick={onNext} 
          aria-label="Next photo"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
