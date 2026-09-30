import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StickySubnav from './components/StickySubnav';
import HeroGallery from './components/HeroGallery';
import BookingWidget from './components/BookingWidget';
import ListingDetails, { LocationSection, ThingsToKnowSection } from './components/ListingDetails';
import OverallReviewSection from './components/OverallReviewSection';
import MoreStaysSection from './components/MoreStaysSection';
import PhotoTourModal from './components/PhotoTourModal';
import LightboxModal from './components/LightboxModal';
import AmenitiesModal from './components/AmenitiesModal';

import { allImages, listingInfo } from './data/listingData';
import './styles/airbnb.css';

export default function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [showStickySubnav, setShowStickySubnav] = useState(false);
  const [activeSection, setActiveSection] = useState('photos');

  // Handle scroll events to toggle sticky subnav & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const photos = document.getElementById('photos');
      if (photos) {
        const triggerPoint = photos.offsetTop + photos.offsetHeight - 60;
        setShowStickySubnav(window.scrollY > triggerPoint);
      } else {
        setShowStickySubnav(window.scrollY > 480);
      }

      // Check section scroll position
      const amenities = document.getElementById('amenities');
      const reviews = document.getElementById('reviews');
      const location = document.getElementById('location');

      const scrollPos = window.scrollY + 200;

      if (location && scrollPos >= location.offsetTop) {
        setActiveSection('location');
      } else if (reviews && scrollPos >= reviews.offsetTop) {
        setActiveSection('reviews');
      } else if (amenities && scrollPos >= amenities.offsetTop) {
        setActiveSection('amenities');
      } else {
        setActiveSection('photos');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenPhotoTour = () => {
    setIsPhotoTourOpen(true);
  };

  const handleOpenLightbox = (index = 0) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const handleToggleSave = () => {
    setIsSaved((prev) => {
      const next = !prev;
      triggerToast(next ? "Saved to your Wishlist!" : "Removed from Wishlist");
      return next;
    });
  };

  const handleClaimDiscount = () => {
    triggerToast("🎉 10% discount promo code applied to your booking!");
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar />

      {/* Sticky Secondary Navigation Header */}
      <StickySubnav 
        isVisible={showStickySubnav} 
        activeSection={activeSection} 
        listingInfo={listingInfo}
        onReserve={handleClaimDiscount}
      />

      {/* Main Listing Body */}
      <main className="main-content">
        {/* 5-Photo Hero Grid */}
        <HeroGallery 
          images={allImages}
          onOpenPhotoTour={handleOpenPhotoTour}
          onOpenLightbox={handleOpenLightbox}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
        />

        {/* Two Column Layout: Left Details + Right Booking Card (sticks down to calendar section) */}
        <div className="details-layout">
          <ListingDetails 
            listingInfo={listingInfo} 
            onClaimDiscount={handleClaimDiscount} 
            onOpenAmenities={() => setIsAmenitiesModalOpen(true)}
          />

          <div className="widget-column">
            <BookingWidget 
              pricing={listingInfo.pricing} 
              rating={listingInfo.rating} 
              reviewsCount={listingInfo.reviewsCount}
              onClaimDiscount={handleClaimDiscount}
            />
          </div>
        </div>

        <div className="section-divider" style={{ margin: '32px 0' }} />

        {/* Full-width Overall Review & Guest Favourite Section */}
        <OverallReviewSection listingInfo={listingInfo} />

        <div className="section-divider" style={{ margin: '32px 0' }} />

        {/* Full-width Location Map Section */}
        <LocationSection />

        <div className="section-divider" style={{ margin: '32px 0' }} />

        {/* Full-width Things to Know Section */}
        <ThingsToKnowSection />

        <div className="section-divider" style={{ margin: '32px 0' }} />

        {/* More Stays Nearby Carousel Section */}
        <MoreStaysSection />
      </main>

      {/* Fullscreen Photo Tour View */}
      <PhotoTourModal 
        isOpen={isPhotoTourOpen}
        onClose={() => setIsPhotoTourOpen(false)}
        onSelectPhoto={(idx) => {
          setIsPhotoTourOpen(false);
          handleOpenLightbox(idx);
        }}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
      />

      {/* Lightbox Single Photo Modal Viewer */}
      <LightboxModal 
        isOpen={isLightboxOpen}
        images={allImages}
        activeIndex={lightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
      />

      {/* All Amenities Modal Popup */}
      <AmenitiesModal 
        isOpen={isAmenitiesModalOpen}
        onClose={() => setIsAmenitiesModalOpen(false)}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="claim-toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
