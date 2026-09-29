---
name: architecture-design
description: Guidelines for production-scale vacation-rental marketplace architecture including frontend CDN, backend services, search, storage, and deployment strategies.
---

# Vacation-Rental Marketplace Architecture Guidelines

## Core Microservices Architecture
1. **Frontend Tier**:
   - Single Page Application (SPA) / Next.js SSR rendered at the edge (Vercel Edge Network / Cloudflare Workers).
   - Global CDN asset distribution for webp/avif image assets.

2. **API Gateway & Microservices**:
   - API Gateway (Kong / AWS API Gateway) handling JWT auth, rate limiting, and route orchestration.
   - Listing Service: Manages listing metadata, amenities, host details.
   - Booking & Reservation Service: Handles calendar availability locks, payments, and booking transactions.
   - Search & Geospatial Service: Powered by Elasticsearch / OpenSearch for fast location-based spatial queries.
   - Review & Rating Service: Manages guest feedback, review moderation, and score aggregation.

3. **Storage & Caching**:
   - Media Storage: AWS S3 + CloudFront CDN with auto-image transcoding (AVIF / WebP).
   - Database: PostgreSQL (Relational transactions for bookings) + Redis (Session cache & listing availability locks).
