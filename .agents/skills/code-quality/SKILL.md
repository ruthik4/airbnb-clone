---
name: code-quality
description: Enforce Airbnb visual fidelity, React component best practices, accessibility standards, and clean state management.
---

# Code Quality Guidelines

## 1. Visual Fidelity & Styling Standards
- Follow Airbnb's official color palette:
  - Brand Accent: `#FF385C`
  - Dark Primary Text: `#222222`
  - Subdued Text: `#717171`
  - Border Gray: `#DDDDDD`
- Use system font stack matching Circular / SF Pro / Inter.
- Standard border radius: 8px for buttons/cards, 12px for listing containers, 22px-40px for pills.

## 2. Component Structure
- Maintain modular design with separation of concerns:
  - `Navbar.jsx`: Site header & search control.
  - `HeroGallery.jsx`: 5-photo grid layout & show all photos trigger.
  - `BookingWidget.jsx`: Pricing calculations, guest selection & promo code logic.
  - `ListingDetails.jsx`: Space info, host details, amenities grid, reviews & map.
  - `PhotoTourModal.jsx`: Categorized room gallery view.
  - `LightboxModal.jsx`: Full-screen single photo viewer with keyboard navigation.

## 3. Keyboard & Accessibility Navigation
- Support `Escape` key to dismiss modal overlays (Photo Tour & Lightbox).
- Support `ArrowLeft` and `ArrowRight` keys for cycling lightbox photos.
- Ensure interactive elements have explicit `aria-label` attributes and focus state management.
