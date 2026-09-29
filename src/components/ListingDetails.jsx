import React, { useState } from 'react';
import { 
  Trophy, Key, Calendar, Sparkles, Wifi, Car, Waves, 
  Wind, Laptop, Tv, Shirt, Utensils, Building, MapPin, ChevronRight
} from 'lucide-react';
import CalendarSection from './CalendarSection';

const iconMap = {
  Sparkles: <Sparkles size={22} />,
  Wifi: <Wifi size={22} />,
  Car: <Car size={22} />,
  Waves: <Waves size={22} />,
  Wind: <Wind size={22} />,
  Laptop: <Laptop size={22} />,
  Tv: <Tv size={22} />,
  Shirt: <Shirt size={22} />,
  Utensils: <Utensils size={22} />,
  Building: <Building size={22} />
};

export default function ListingDetails({ listingInfo, onClaimDiscount, onOpenAmenities }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="left-content">
      {/* Subtitle & Host Header */}
      <div>
        <h2 className="listing-subtitle">{listingInfo.details.propertyType} in Candolim, India</h2>
        <div className="listing-stats">
          {listingInfo.details.guests} guests · {listingInfo.details.bedrooms} bedroom · {listingInfo.details.beds} bed · {listingInfo.details.bathrooms} bathroom
        </div>
      </div>

      {/* Guest Favorite Badge Box */}
      <div className="badge-box">
        <div className="badge-left">
          <Trophy size={32} color="#FF385C" />
          <div>
            <div className="badge-text-title">Guest favorite</div>
            <div className="badge-text-sub">One of the most loved homes on Airbnb, according to guests</div>
          </div>
        </div>
        <div className="badge-rating">
          <div className="badge-score">{listingInfo.rating}</div>
          <a href="#reviews" className="badge-reviews-link">★ ★ ★ ★ ★</a>
        </div>
      </div>

      {/* Host Profile Info */}
      <div className="host-row">
        <img 
          src={listingInfo.host.avatar} 
          alt={listingInfo.host.name} 
          className="host-avatar" 
        />
        <div>
          <div className="host-name">Hosted by {listingInfo.host.name}</div>
          <div className="host-meta">Superhost · {listingInfo.host.yearsHosting} years hosting</div>
        </div>
      </div>

      <div className="section-divider" />

      {/* Key Features List */}
      <div className="features-list">
        <div className="feature-item">
          <Laptop size={24} className="feature-icon" />
          <div>
            <div className="feature-title">Dedicated workspace</div>
            <div className="feature-desc">A room with fast Wi-Fi that is well-suited for working.</div>
          </div>
        </div>

        <div className="feature-item">
          <Key size={24} className="feature-icon" />
          <div>
            <div className="feature-title">Self check-in</div>
            <div className="feature-desc">Check yourself in with the digital door keypad.</div>
          </div>
        </div>

        <div className="feature-item">
          <Calendar size={24} className="feature-icon" />
          <div>
            <div className="feature-title">Free cancellation for 48 hours</div>
            <div className="feature-desc">Get a full refund if you change your mind within 48 hours.</div>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* Promo Banner */}
      <div className="promo-banner">
        <div>
          <div className="promo-title">
            <Sparkles size={18} />
            Get {listingInfo.pricing.discountPercent}% off your next stay
          </div>
          <div className="promo-sub">Promocode applied: {listingInfo.pricing.promoCode}</div>
        </div>
        <button className="claim-btn" onClick={onClaimDiscount}>
          Claim Discount
        </button>
      </div>

      <div className="section-divider" />

      {/* About this space */}
      <div>
        <h3 className="section-title">About this space</h3>
        <p className="description-text">
          {showFullDesc ? listingInfo.description : `${listingInfo.description.slice(0, 220)}...`}
        </p>
        <button className="show-more-btn" onClick={() => setShowFullDesc(!showFullDesc)}>
          {showFullDesc ? "Show less" : "Show more"} <ChevronRight size={16} />
        </button>
      </div>

      <div className="section-divider" />

      {/* Where you'll sleep */}
      <div>
        <h3 className="section-title">Where you'll sleep</h3>
        <div style={{ border: '1px solid #dddddd', borderRadius: '12px', padding: '24px', maxWidth: '240px' }}>
          <div style={{ marginBottom: '16px', fontWeight: 600 }}>Bedroom</div>
          <div style={{ fontSize: '14px', color: '#717171' }}>1 king bed</div>
        </div>
      </div>

      <div className="section-divider" />

      {/* Amenities Grid */}
      <div id="amenities">
        <h3 className="section-title">What this place offers</h3>
        <div className="amenities-grid">
          {listingInfo.amenities.map((item, idx) => (
            <div key={idx} className="amenity-item">
              {iconMap[item.icon] || <Sparkles size={22} />}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <button className="amenities-all-btn" onClick={onOpenAmenities}>
          Show all {listingInfo.amenities.length} amenities
        </button>
      </div>

      <div className="section-divider" />

      {/* Interactive Dual Month Calendar Section */}
      <CalendarSection locationName="Candolim" />
    </div>
  );
}

export function LocationSection() {
  return (
    <div id="location" style={{ padding: '16px 0' }}>
      <h3 className="section-title">Where you'll be</h3>
      <div style={{ fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <MapPin size={18} /> Candolim, Goa, India
      </div>
      <div style={{ width: '100%', height: '360px', borderRadius: '16px', background: '#e5e7eb', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.6, backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        <div style={{ background: '#FF385C', color: 'white', padding: '12px 18px', borderRadius: '24px', fontWeight: 700, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={20} /> Mirashya UG10 Candolim
        </div>
      </div>
    </div>
  );
}

export function ThingsToKnowSection() {
  return (
    <div style={{ padding: '16px 0' }}>
      <h3 className="section-title">Things to know</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', fontSize: '14px' }}>
        <div>
          <div style={{ fontWeight: 600, marginBottom: '8px' }}>House rules</div>
          <div>Check-in: 2:00 PM - 10:00 PM</div>
          <div>Checkout before 11:00 AM</div>
          <div>5 guests maximum</div>
        </div>
        <div>
          <div style={{ fontWeight: 600, marginBottom: '8px' }}>Safety & property</div>
          <div>Smoke alarm installed</div>
          <div>Carbon monoxide alarm</div>
          <div>Security camera on premises</div>
        </div>
        <div>
          <div style={{ fontWeight: 600, marginBottom: '8px' }}>Cancellation policy</div>
          <div>Free cancellation for 48 hours.</div>
          <div>Review host full policy for details.</div>
        </div>
      </div>
    </div>
  );
}
