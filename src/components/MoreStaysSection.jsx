import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { moreStaysData } from '../data/listingData';

export default function MoreStaysSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(moreStaysData.length / itemsPerPage);

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="more-stays-container">
      <div className="more-stays-header">
        <h2 className="more-stays-title">More stays nearby</h2>
        <div className="more-stays-controls">
          <span className="more-stays-page-indicator">{currentPage} / {totalPages}</span>
          <button 
            className="more-stays-nav-btn" 
            onClick={prevPage} 
            disabled={currentPage === 1}
            aria-label="Previous stays"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            className="more-stays-nav-btn" 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            aria-label="Next stays"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Smooth Sliding Carousel Viewport */}
      <div className="more-stays-viewport">
        <div 
          className="more-stays-track"
          style={{
            transform: currentPage === 1 
              ? 'translateX(0%)' 
              : 'translateX(calc(-100% - 16px))'
          }}
        >
          {moreStaysData.map((stay) => (
            <div key={stay.id} className="stay-card">
              <div className="stay-card-image-wrap">
                <img src={stay.image} alt={stay.title} className="stay-card-image" />
              </div>
              <h3 className="stay-card-title">{stay.title}</h3>
              <div className="stay-card-meta">
                <span className="stay-card-price">{stay.price}</span>
                <span className="stay-card-rating">
                  <Star size={12} fill="currentColor" stroke="none" />
                  {stay.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
