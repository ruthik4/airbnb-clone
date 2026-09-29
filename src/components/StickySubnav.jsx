import React from 'react';

export default function StickySubnav({ activeSection }) {
  return (
    <div className="sticky-subnav">
      <div className="subnav-inner">
        <a href="#photos" className={`subnav-link ${activeSection === 'photos' ? 'active' : ''}`}>Photos</a>
        <a href="#amenities" className={`subnav-link ${activeSection === 'amenities' ? 'active' : ''}`}>Amenities</a>
        <a href="#reviews" className={`subnav-link ${activeSection === 'reviews' ? 'active' : ''}`}>Reviews</a>
        <a href="#location" className={`subnav-link ${activeSection === 'location' ? 'active' : ''}`}>Location</a>
      </div>
    </div>
  );
}
