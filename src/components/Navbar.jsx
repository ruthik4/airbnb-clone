import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Airbnb Logo */}
        <a href="#" className="header-logo" aria-label="Airbnb Home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.14-3.36 7.5-7.5 7.5-2.5 0-4.75-1.229-6.148-3.125-.138.077-.282.15-.432.219C13.987 29.352 12.08 30 10 30c-4.14 0-7.5-3.36-7.5-7.5 0-.924.243-1.805.91-3.396l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.187 0-2.197.683-3.21 2.502l-.39.754C10.53 9.879 6.47 18.397 5.54 20.573c-.55 1.31-.74 2.01-.78 2.72l-.01.207C4.75 26.31 7.104 28 10 28c1.644 0 3.167-.532 4.417-1.464l.325-.256.326.256C16.313 27.468 17.836 28 19.5 28c2.896 0 5.25-1.69 5.25-4.5 0-.71-.19-1.41-.74-2.72-.93-2.176-4.99-10.694-6.86-14.317l-.39-.754C15.747 3.683 14.737 3 13.55 3H16z" />
          </svg>
          <span>airbnb</span>
        </a>

        {/* Search Pill */}
        <div className="search-pill" role="button" tabIndex={0}>
          <span className="search-pill-item">Anywhere</span>
          <span className="search-pill-divider" />
          <span className="search-pill-item">Any week</span>
          <span className="search-pill-divider" />
          <span className="search-pill-item muted">Add guests</span>
          <div className="search-icon-btn">
            <Search size={14} strokeWidth={3} />
          </div>
        </div>

        {/* User Menu */}
        <div className="header-user-menu">
          <button className="host-link">Airbnb your home</button>
          <button className="globe-btn" aria-label="Choose language and currency">
            <Globe size={18} />
          </button>
          <div className="user-pill" role="button" tabIndex={0} aria-label="User menu">
            <Menu size={18} />
            <div style={{ background: '#717171', color: 'white', borderRadius: '50%', padding: '2px' }}>
              <User size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
