import React, { useState } from 'react';
import { 
  CheckCircle2, Key, MessageSquare, Map, Tag, 
  Armchair, Flame, Sparkles, Heart, Box, X
} from 'lucide-react';

// Custom Spray Bottle Icon for Cleanliness
const SprayBottleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2h4m-2 0v4m-3 0h6l1 14H8L9 6z" />
    <path d="M15 10l3-2" />
    <circle cx="18" cy="7" r="1" fill="currentColor" />
  </svg>
);

// Laurel Wreath Left SVG Component matching Airbnb Guest Favourite badge
const LaurelLeft = () => (
  <svg width="42" height="64" viewBox="0 0 42 64" fill="#222222" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 60C32 49 23 35 16 24C11 17 8 10 7 3C6.7 2.2 5.8 1.8 5 2.1C4.2 2.4 3.8 3.3 4.1 4.1C6.2 9.4 9.4 15.6 13.5 22.7C18.6 32.7 25.6 43.8 30.2 51.2C30.6 51.9 31.5 52.1 32.2 51.7C32.9 51.3 33.1 50.3 32.7 49.6L38 60Z" />
    {/* Outer leaf shapes */}
    <path d="M7 4C3 6 -1 11 -3 15C1 11 4 7 7 4Z" />
    <path d="M11 12C6 13 1 17 -2 22C3 18 7 14 11 12Z" />
    <path d="M16 21C11 22 6 26 3 32C8 27 12 23 16 21Z" />
    <path d="M22 30C17 32 12 36 9 42C14 37 18 33 22 30Z" />
    <path d="M28 39C23 41 18 45 15 51C20 45 24 41 28 39Z" />
    {/* Inner leaf shapes */}
    <path d="M9 7C14 7 19 5 23 2C18 5 13 6 9 7Z" />
    <path d="M13 15C18 14 23 11 27 7C22 11 17 13 13 15Z" />
    <path d="M18 24C23 22 28 19 32 14C27 19 22 21 18 24Z" />
    <path d="M24 33C29 30 34 26 37 21C33 26 28 29 24 33Z" />
  </svg>
);

export default function OverallReviewSection({ listingInfo }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  const filterTags = [
    { label: 'Comfort', count: 6, icon: <Armchair size={16} /> },
    { label: 'Accuracy', count: 5, icon: <CheckCircle2 size={16} /> },
    { label: 'Hot tub', count: 5, icon: <Flame size={16} /> },
    { label: 'Condition', count: 4, icon: <Sparkles size={16} /> },
    { label: 'Hospitality', count: 8, icon: <Heart size={16} /> },
    { label: 'Cleanliness', count: 4, icon: <SprayBottleIcon /> },
    { label: 'Amenities', count: 2, icon: <Box size={16} /> },
  ];

  const handleTagClick = (tagLabel) => {
    setSelectedTag(prev => prev === tagLabel ? null : tagLabel);
  };

  const reviews = listingInfo.reviews || [];
  const filteredReviews = reviews.filter(rev => {
    if (!selectedTag) return true;
    return rev.comment.toLowerCase().includes(selectedTag.toLowerCase());
  });

  return (
    <div id="reviews" className="overall-review-container">
      {/* 1. Laurel & Hero Score Header */}
      <div className="review-hero">
        <div className="laurel-score-row">
          <LaurelLeft />
          <span className="big-rating-score">4.95</span>
          <div style={{ transform: 'scaleX(-1)', display: 'inline-flex' }}>
            <LaurelLeft />
          </div>
        </div>

        <h2 className="guest-fav-title">Guest favourite</h2>
        <p className="guest-fav-subtitle">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button className="how-reviews-btn" onClick={() => setShowModal(true)}>
          How reviews work
        </button>
      </div>

      {/* 2. 7-Column Rating Breakdown Grid */}
      <div className="overall-metrics-grid">
        {/* Column 1: Overall rating histogram */}
        <div className="metric-column overall-col">
          <div className="metric-col-title">Overall rating</div>
          <div className="rating-histogram">
            {[
              { star: 5, width: '95%', knob: true },
              { star: 4, width: '0%', knob: false },
              { star: 3, width: '0%', knob: false },
              { star: 2, width: '0%', knob: false },
              { star: 1, width: '0%', knob: false },
            ].map((item) => (
              <div key={item.star} className="histo-row">
                <span className="histo-star-num">{item.star}</span>
                <div className="histo-bar-track">
                  <div className="histo-bar-fill" style={{ width: item.width }} />
                  {item.knob && <div className="histo-knob" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Cleanliness */}
        <div className="metric-column">
          <div>
            <div className="metric-col-title">Cleanliness</div>
            <div className="metric-col-score">5.0</div>
          </div>
          <div className="metric-col-icon">
            <SprayBottleIcon />
          </div>
        </div>

        {/* Column 3: Accuracy */}
        <div className="metric-column">
          <div>
            <div className="metric-col-title">Accuracy</div>
            <div className="metric-col-score">5.0</div>
          </div>
          <div className="metric-col-icon">
            <CheckCircle2 size={24} strokeWidth={1.5} />
          </div>
        </div>

        {/* Column 4: Check-in */}
        <div className="metric-column">
          <div>
            <div className="metric-col-title">Check-in</div>
            <div className="metric-col-score">5.0</div>
          </div>
          <div className="metric-col-icon">
            <Key size={24} strokeWidth={1.5} />
          </div>
        </div>

        {/* Column 5: Communication */}
        <div className="metric-column">
          <div>
            <div className="metric-col-title">Communication</div>
            <div className="metric-col-score">5.0</div>
          </div>
          <div className="metric-col-icon">
            <MessageSquare size={24} strokeWidth={1.5} />
          </div>
        </div>

        {/* Column 6: Location */}
        <div className="metric-column">
          <div>
            <div className="metric-col-title">Location</div>
            <div className="metric-col-score">4.8</div>
          </div>
          <div className="metric-col-icon">
            <Map size={24} strokeWidth={1.5} />
          </div>
        </div>

        {/* Column 7: Value */}
        <div className="metric-column last-col">
          <div>
            <div className="metric-col-title">Value</div>
            <div className="metric-col-score">4.8</div>
          </div>
          <div className="metric-col-icon">
            <Tag size={24} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* 3. Filter Tag Pills Row */}
      <div className="review-pills-row">
        {filterTags.map((tag) => {
          const isSelected = selectedTag === tag.label;
          return (
            <button
              key={tag.label}
              className={`review-pill ${isSelected ? 'selected' : ''}`}
              onClick={() => handleTagClick(tag.label)}
            >
              <span className="pill-icon">{tag.icon}</span>
              <span>{tag.label}</span>
              <span className="pill-count">{tag.count}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Guest Reviews Cards Grid */}
      <div className="reviews-grid" style={{ marginTop: '32px' }}>
        {filteredReviews.length > 0 ? (
          filteredReviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-user">
                <img src={rev.avatar} alt={rev.name} className="review-user-avatar" />
                <div>
                  <div className="review-user-name">{rev.name}</div>
                  <div className="review-user-date">{rev.date}</div>
                </div>
              </div>
              <p className="review-text">{rev.comment}</p>
            </div>
          ))
        ) : (
          <div style={{ color: '#717171', padding: '16px 0', fontSize: '14px' }}>
            Showing all reviews for this home. Click tag again to clear filter.
          </div>
        )}
      </div>

      {/* How Reviews Work Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-bar">
              <h3>How reviews work</h3>
              <button className="modal-close-btn" onClick={() => setShowModal(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="modal-body-padding">
              <div className="modal-info-block">
                <h4>Guest favourite badge</h4>
                <p>
                  One of the most loved homes on Airbnb, according to guests. Guest favourites are determined using rating scores, reviews from verified stays, and account reliability metrics over the past 365 days.
                </p>
              </div>

              <div className="modal-info-block">
                <h4>Verified Reviews</h4>
                <p>
                  All reviews on Airbnb are written by guests who have booked and completed a reservation at this listing, ensuring 100% authentic guest experiences.
                </p>
              </div>

              <div className="modal-info-block">
                <h4>Category Breakdown</h4>
                <p>
                  Scores for cleanliness, accuracy, check-in, communication, location, and value are calculated directly from guest ratings awarded after checkout.
                </p>
              </div>

              <button className="modal-primary-btn" onClick={() => setShowModal(false)}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
