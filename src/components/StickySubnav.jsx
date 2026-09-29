import React, { useState, useEffect } from 'react';

export default function StickySubnav({ activeSection, isVisible, listingInfo, onReserve }) {
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  useEffect(() => {
    if (isVisible && !hasScrolledOnce) {
      setHasScrolledOnce(true);
    }
  }, [isVisible, hasScrolledOnce]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 125; // Account for fixed site header + sticky subnav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!hasScrolledOnce && !isVisible) return null;

  const totalFor5Nights = (listingInfo?.pricing?.pricePerNight * 5 + listingInfo?.pricing?.cleaningFee + listingInfo?.pricing?.serviceFee) || 28499;

  return (
    <div className={`sticky-subnav ${isVisible ? 'slide-down' : 'slide-up'}`}>
      <div className="subnav-inner">
        {/* Left Section Links */}
        <div className="subnav-links">
          <a 
            href="#photos" 
            onClick={(e) => scrollToSection(e, 'photos')} 
            className={`subnav-link ${activeSection === 'photos' ? 'active' : ''}`}
          >
            Photos
          </a>
          <a 
            href="#amenities" 
            onClick={(e) => scrollToSection(e, 'amenities')} 
            className={`subnav-link ${activeSection === 'amenities' ? 'active' : ''}`}
          >
            Amenities
          </a>
          <a 
            href="#reviews" 
            onClick={(e) => scrollToSection(e, 'reviews')} 
            className={`subnav-link ${activeSection === 'reviews' ? 'active' : ''}`}
          >
            Reviews
          </a>
          <a 
            href="#location" 
            onClick={(e) => scrollToSection(e, 'location')} 
            className={`subnav-link ${activeSection === 'location' ? 'active' : ''}`}
          >
            Location
          </a>
        </div>

        {/* Right Price & Reserve Block matching reference image */}
        <div className="subnav-right">
          <div className="subnav-price-block">
            <div className="subnav-price-main">
              <strong>₹{totalFor5Nights.toLocaleString('en-IN')}</strong> for 5 nights
            </div>
            <div className="subnav-rating-sub">
              ★ {listingInfo?.rating || '4.92'} · {listingInfo?.reviewsCount || '38'} reviews
            </div>
          </div>

          <button className="subnav-reserve-btn" onClick={onReserve}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
