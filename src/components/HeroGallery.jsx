import React from 'react';
import { LayoutGrid, Share, Heart } from 'lucide-react';

export default function HeroGallery({ images, onOpenPhotoTour, onOpenLightbox, isSaved, onToggleSave }) {
  const hero5 = images.slice(0, 5);

  return (
    <section id="photos" className="property-header-section">
      {/* Property Title & Action Buttons on the same line */}
      <div className="property-header">
        <h1 className="property-title">Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>

        <div className="action-buttons">
          <button className="action-btn" aria-label="Share listing">
            <Share size={16} />
            <span>Share</span>
          </button>
          <button 
            className="action-btn" 
            onClick={onToggleSave}
            aria-label={isSaved ? "Saved to wishlists" : "Save listing"}
          >
            <Heart size={16} fill={isSaved ? "#FF385C" : "none"} color={isSaved ? "#FF385C" : "currentColor"} />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {/* 5-Photo Grid */}
      <div className="hero-gallery-container">
        <div className="hero-grid">
          {hero5.map((img, idx) => {
            const isLarge = idx === 0;
            return (
              <div 
                key={img.id || idx} 
                className={`hero-item ${isLarge ? 'hero-item-large' : ''}`}
                onClick={() => onOpenLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View photo ${idx + 1}`}
              >
                <img src={img.url} alt={img.title || `Property photo ${idx + 1}`} />
              </div>
            );
          })}
        </div>

        {/* Show all photos floating button */}
        <button className="show-all-photos-btn" onClick={onOpenPhotoTour}>
          <LayoutGrid size={16} />
          <span>Show all photos ({images.length})</span>
        </button>
      </div>
    </section>
  );
}
