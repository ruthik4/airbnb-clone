import React, { useEffect } from 'react';
import { 
  X, Wind, Sparkles, Droplets, Flame, Shirt, Sun, Tv, Wifi, 
  ShieldCheck, Utensils, Car, Waves, Laptop, Building, Bath, Bed, Coffee, Box
} from 'lucide-react';
import { categorizedAmenities } from '../data/listingData';

const iconMap = {
  Wind: <Wind size={24} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={24} strokeWidth={1.5} />,
  Droplets: <Droplets size={24} strokeWidth={1.5} />,
  Flame: <Flame size={24} strokeWidth={1.5} />,
  Shirt: <Shirt size={24} strokeWidth={1.5} />,
  Sun: <Sun size={24} strokeWidth={1.5} />,
  Tv: <Tv size={24} strokeWidth={1.5} />,
  Wifi: <Wifi size={24} strokeWidth={1.5} />,
  ShieldCheck: <ShieldCheck size={24} strokeWidth={1.5} />,
  Utensils: <Utensils size={24} strokeWidth={1.5} />,
  Car: <Car size={24} strokeWidth={1.5} />,
  Waves: <Waves size={24} strokeWidth={1.5} />,
  Laptop: <Laptop size={24} strokeWidth={1.5} />,
  Building: <Building size={24} strokeWidth={1.5} />,
  Bath: <Bath size={24} strokeWidth={1.5} />,
  Bed: <Bed size={24} strokeWidth={1.5} />,
  Coffee: <Coffee size={24} strokeWidth={1.5} />,
  Box: <Box size={24} strokeWidth={1.5} />
};

export default function AmenitiesModal({ isOpen, onClose }) {
  // Lock body scroll and attach ESC key listener when open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="amenities-modal-overlay" onClick={onClose}>
      <div 
        className="amenities-modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="amenities-modal-title"
      >
        {/* Sticky Header with Close Button */}
        <div className="amenities-modal-header">
          <button 
            className="amenities-modal-close-btn" 
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="amenities-modal-body">
          <h2 id="amenities-modal-title" className="amenities-modal-title">
            What this place offers
          </h2>

          <div className="amenities-categories-list">
            {categorizedAmenities.map((group, groupIdx) => (
              <div key={groupIdx} className="amenities-category-group">
                <h3 className="amenities-category-heading">{group.category}</h3>
                <div className="amenities-category-items">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="amenities-modal-row">
                      <div className="amenity-icon-wrap">
                        {iconMap[item.icon] || <Sparkles size={24} strokeWidth={1.5} />}
                      </div>
                      <span className="amenity-label">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
