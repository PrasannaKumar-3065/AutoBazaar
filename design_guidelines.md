# Design Guidelines: AutoParts Pro - Car Accessories E-commerce & Consultation Platform

## Design Approach

**Selected Approach**: Reference-Based (E-commerce + Service Platform Hybrid)

Drawing inspiration from:
- **Shopify**: Clean product displays, trustworthy checkout flows
- **Modern Service Platforms**: Professional appointment booking interfaces
- **Automotive Industry Standards**: Bold, reliable, performance-oriented aesthetics

**Design Principles**:
1. Trust & Credibility: Professional appearance to build confidence in both products and services
2. Visual Product Focus: High-quality imagery to showcase car accessories
3. Geographic Context: Subtle Tamil Nadu/Coimbatore regional identity
4. Dual Purpose: Seamless transition between shopping and booking experiences

## Core Design Elements

### A. Color Palette

**Primary Colors**:
- Deep Navy: `215 45% 25%` (Brand authority, trust)
- Vibrant Orange: `25 95% 55%` (CTAs, automotive energy)

**Secondary Colors**:
- Charcoal: `220 15% 20%` (Dark mode backgrounds)
- Light Gray: `220 15% 96%` (Light mode backgrounds)
- Slate: `215 20% 65%` (Secondary text, borders)

**Semantic Colors**:
- Success Green: `140 65% 45%` (Available slots, order confirmations)
- Warning Amber: `35 90% 55%` (Stock alerts, location restrictions)
- Error Red: `0 75% 50%` (Validation errors, out of stock)

**Dark Mode Adjustments**:
- Background: `220 18% 12%`
- Surface: `220 15% 18%`
- Text: `220 15% 95%`

### B. Typography

**Font Families**:
- **Headings**: Inter (700, 600) - Modern, clean, professional
- **Body**: Inter (400, 500) - Excellent readability
- **Accent/Price**: Space Grotesk (600) - Distinctive for pricing and CTAs

**Type Scale**:
- Hero: text-6xl (60px) / text-5xl mobile
- Section Headers: text-4xl (36px) / text-3xl mobile
- Product Titles: text-2xl (24px)
- Body: text-base (16px)
- Captions: text-sm (14px)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24**

Common patterns:
- Section padding: `py-20` desktop / `py-12` mobile
- Card padding: `p-6` or `p-8`
- Element gaps: `gap-4` or `gap-6` in grids
- Container: `max-w-7xl mx-auto px-4`

**Grid Systems**:
- Product Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Feature Cards: `grid-cols-1 md:grid-cols-3`
- Appointment Layout: `grid-cols-1 lg:grid-cols-3` (Calendar + Details + Summary)

### D. Component Library

**Navigation**:
- Sticky header with logo, search bar, cart icon, account menu
- Category mega-menu on hover
- Mobile: Hamburger with slide-out drawer
- Shopping cart badge with item count

**Product Cards**:
- Image with hover zoom effect
- Badge overlay for "New" / "Sale" / "Low Stock"
- Product name, price (with strikethrough for discounts)
- Quick view button on hover
- Add to cart button with quantity selector

**Appointment Booking Interface**:
- Location verification banner (prominent for Tamil Nadu, Coimbatore)
- Service selection cards with icons and duration
- Calendar component with available/unavailable date states
- Time slot grid with 30-min intervals
- Appointment summary sidebar with total cost

**Checkout Flow**:
- Progress indicator (Cart → Details → Payment → Confirmation)
- Order summary sidebar (sticky on desktop)
- Stripe payment element with card inputs
- Address autocomplete for shipping

**Dashboard Components**:
- Tab navigation (Orders, Appointments, Profile)
- Order cards with status badges
- Appointment cards with date/time and action buttons
- Data tables for order history

**Forms**:
- Floating labels for inputs
- Clear validation states (success/error borders and messages)
- Dark mode: Input backgrounds slightly lighter than page background
- Disabled state: Reduced opacity with cursor-not-allowed

**Buttons**:
- Primary: Orange background, white text, rounded-lg
- Secondary: Navy outline, navy text
- Ghost: Transparent with hover background
- Icon buttons for cart, wishlist, quick actions

### E. Images

**Hero Section**:
- Full-width hero image showcasing high-quality car accessories installation or automotive workshop
- Image: Professional photo of car interior/exterior with premium accessories
- Overlay: Dark gradient (from bottom) for text readability
- Hero text: "Premium Car Accessories & Expert Installation" with location badge

**Product Images**:
- Square aspect ratio (1:1) for grid consistency
- High-resolution with white/transparent backgrounds for product shots
- Lifestyle images showing accessories installed in vehicles
- Multiple angles in product detail gallery (4-6 images)

**Consultation Section**:
- Image of professional consultation/workshop in Coimbatore (if available)
- Team photo or mechanic working on vehicle
- Background image in appointment booking section (subtle, low opacity)

**Category Banners**:
- Header images for each category (Interior, Exterior, Electronics, Performance)
- Lifestyle photography showing category products in use

**Trust Indicators**:
- Partner/brand logos (car manufacturers, accessory brands)
- Certification badges
- Customer photos (testimonials with installed accessories)

### F. Special Considerations

**Location Restriction UI**:
- Prominent banner on appointment pages for eligible users
- Modal for non-Coimbatore users explaining service area
- Map integration showing service coverage
- Badge/icon indicating "Coimbatore Service Available"

**E-commerce Specific**:
- Product filters sidebar (Category, Price, Brand, Car Model compatibility)
- Sort dropdown (Price, Popularity, New Arrivals)
- Wishlist heart icon with saved state
- Stock indicators (In Stock, Low Stock, Out of Stock)
- Related products carousel

**Animations**: 
- Minimal, purposeful only
- Product card hover: Subtle scale (1.02) and shadow increase
- Add to cart: Brief success animation
- Page transitions: Smooth fade
- No distracting scroll-triggered animations

This design balances e-commerce best practices with professional service booking, creating a trustworthy platform for car accessory sales and expert consultation services specific to the Coimbatore market.