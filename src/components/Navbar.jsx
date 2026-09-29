import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';
import houseIconImg from '../assets/house-icon/Screenshot_2026-09-29_202356-removebg-preview.png';
import logoImg from '../assets/airbnb-logo/d406bf4e4b2369ba6794d0a4d57ec509-removebg-preview-removebg-preview.png';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Airbnb Logo image from assets/airbnb-logo folder */}
        <a href="#" className="header-logo" aria-label="Airbnb Home">
          <img src={logoImg} alt="Airbnb" className="site-logo-img" />
        </a>

        {/* Search Pill matching reference */}
        <div className="search-pill" role="button" tabIndex={0}>
          <img src={houseIconImg} alt="House" className="search-house-icon" />
          <span className="search-pill-item">Anywhere</span>
          <span className="search-pill-pipe">|</span>
          <span className="search-pill-item">Anytime</span>
          <span className="search-pill-pipe">|</span>
          <span className="search-pill-item muted">Add guests</span>
          <div className="search-icon-btn">
            <Search size={14} strokeWidth={3} />
          </div>
        </div>

        {/* User Menu matching reference screenshot */}
        <div className="header-user-menu">
          <button className="host-link">Become a host</button>
          <button className="globe-circle-btn" aria-label="Choose language and currency">
            <Globe size={18} strokeWidth={2} />
          </button>
          <button className="menu-circle-btn" aria-label="User menu">
            <Menu size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
