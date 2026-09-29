import React, { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';

export default function BookingWidget({ pricing, rating, reviewsCount, onClaimDiscount }) {
  const [nights, setNights] = useState(5);
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState("2026-10-10");
  const [checkOut, setCheckOut] = useState("2026-10-15");
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [discountClaimed, setDiscountClaimed] = useState(false);

  const basePrice = pricing.pricePerNight * nights;
  const discountAmount = discountClaimed ? Math.round(basePrice * (pricing.discountPercent / 100)) : 0;
  const total = basePrice + pricing.cleaningFee + pricing.serviceFee - discountAmount;

  const handleClaim = () => {
    setDiscountClaimed(true);
    if (onClaimDiscount) onClaimDiscount();
  };

  return (
    <div className="booking-widget">
      {/* Price Header */}
      <div className="widget-header">
        <div className="widget-price">
          ₹{pricing.pricePerNight.toLocaleString('en-IN')} <span>/ night</span>
        </div>
        <div className="widget-rating-sub">
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={14} fill="currentColor" />
            {rating} · <u style={{ color: '#717171' }}>{reviewsCount} reviews</u>
          </span>
        </div>
      </div>

      {/* Date & Guest Form Box */}
      <div className="booking-form-box">
        <div className="dates-row">
          <div className="form-cell">
            <div className="cell-label">CHECK-IN</div>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              style={{ border: 'none', background: 'transparent', fontSize: '13px', width: '100%', cursor: 'pointer' }}
            />
          </div>
          <div className="form-cell">
            <div className="cell-label">CHECKOUT</div>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              style={{ border: 'none', background: 'transparent', fontSize: '13px', width: '100%', cursor: 'pointer' }}
            />
          </div>
        </div>

        <div className="guests-cell" onClick={() => setShowGuestPicker(!showGuestPicker)}>
          <div>
            <div className="cell-label">GUESTS</div>
            <div className="cell-val">{guests} guests</div>
          </div>
          <ChevronDown size={18} />
        </div>

        {showGuestPicker && (
          <div style={{ padding: '12px 16px', background: '#f7f7f7', borderTop: '1px solid #dddddd', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '14px' }}>Adults / Children</span>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button 
                onClick={() => setGuests(Math.max(1, guests - 1))}
                style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #717171' }}
              >-</button>
              <span>{guests}</span>
              <button 
                onClick={() => setGuests(Math.min(5, guests + 1))}
                style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #717171' }}
              >+</button>
            </div>
          </div>
        )}
      </div>

      {/* Reserve Button */}
      <button className="reserve-btn" onClick={handleClaim}>
        {discountClaimed ? "Reserve with 10% Discount" : "Reserve"}
      </button>

      <div className="no-charge-text">You won't be charged yet</div>

      {/* Price breakdown */}
      <div className="price-breakdown">
        <div className="breakdown-row">
          <span>₹{pricing.pricePerNight.toLocaleString('en-IN')} x {nights} nights</span>
          <span>₹{basePrice.toLocaleString('en-IN')}</span>
        </div>
        <div className="breakdown-row">
          <span>Cleaning fee</span>
          <span>₹{pricing.cleaningFee.toLocaleString('en-IN')}</span>
        </div>
        <div className="breakdown-row">
          <span>Airbnb service fee</span>
          <span>₹{pricing.serviceFee.toLocaleString('en-IN')}</span>
        </div>

        {discountClaimed && (
          <div className="breakdown-row discount">
            <span>Special 10% Promo Discount</span>
            <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
          </div>
        )}
      </div>

      <div className="breakdown-total">
        <span>Total before taxes</span>
        <span>₹{total.toLocaleString('en-IN')}</span>
      </div>
    </div>
  );
}
