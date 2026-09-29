# Production Architecture Diagram & Scaling Strategy

## High-Level Vacation-Rental Marketplace Architecture

```mermaid
flowchart TD
    subgraph Client Tier
        UserClient[Desktop & Mobile Web Browser]
        MobileApp[iOS / Android Mobile Native Apps]
    end

    subgraph CDN & Edge Layer
        VercelCDN[Vercel Global Edge Network / Cloudflare CDN]
        MediaCDN[AWS CloudFront / Image CDN - AVIF Optimization]
    end

    subgraph API Gateway Layer
        Gateway[Kong / AWS API Gateway]
        AuthService[Auth0 / JWT Authentication Service]
    end

    subgraph Microservices Tier
        ListingService[Listing & Property Service]
        BookingService[Booking & Payment Engine]
        SearchService[Search & Geospatial Engine - Elasticsearch]
        ReviewService[Reviews & Ratings Service]
        NotificationService[Notification & Messaging Service]
    end

    subgraph Caching & Storage Layer
        RedisCache[Redis Cluster - Inventory & Rates Cache]
        MainDB[(Primary PostgreSQL Database - Relational ACID)]
        ESCluster[(Elasticsearch / OpenSearch Cluster - Geo Spatial Index)]
        S3Bucket[(AWS S3 Media Bucket - High Res Listing Photos)]
    end

    UserClient -->|HTTPS / WSS| VercelCDN
    MobileApp -->|HTTPS / WSS| Gateway
    VercelCDN --> Gateway
    VercelCDN -->|Static Assets & Photos| MediaCDN
    MediaCDN --> S3Bucket

    Gateway -->|Auth Validation| AuthService
    Gateway -->|Property Queries| ListingService
    Gateway -->|Reservations & Payments| BookingService
    Gateway -->|Geo Location Search| SearchService
    Gateway -->|Ratings & Comments| ReviewService

    ListingService --> RedisCache
    ListingService --> MainDB
    BookingService --> RedisCache
    BookingService --> MainDB
    SearchService --> ESCluster
    ReviewService --> MainDB

    MainDB -->|CDC Stream / Debezium| ESCluster
```

---

## Architecture Components & Scaling Strategy

### 1. Frontend & Edge Distribution
- **Tech Stack**: React 19 / Vite hosted on **Vercel Edge Network**.
- **Caching & Asset Delivery**: Images served in modern `.avif` / `.webp` formats via **AWS CloudFront** with dynamic image resizing and browser cache headers (`Cache-Control: public, max-age=31536000, immutable`).
- **Client Performance**: Lazy-loading image galleries, code splitting routes, and instant skeleton states.

### 2. Microservices Core
- **Listing & Property Service**: Manages property details, amenities, host data, and room categories.
- **Search & Geospatial Engine**: Leverages **Elasticsearch / OpenSearch** with Geo-Point indexing to allow instant bounding-box map searches and price filtering.
- **Booking & Inventory Engine**: Uses **Redis distributed locks** (Redlock algorithm) to prevent double-booking of listing dates during peak checkout concurrency.
- **Database Architecture**: PostgreSQL for primary ACID transactional data (bookings, user profiles, payouts).

### 3. High Availability & Disaster Recovery
- **Multi-Region Deployment**: Active-Active database replica in primary AWS regions.
- **Cache Invalidation**: Event-driven cache update via Kafka/RabbitMQ whenever host updates listing availability or rates.
