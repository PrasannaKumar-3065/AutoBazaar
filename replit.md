# AutoParts Pro

## Overview
AutoParts Pro is an e-commerce and consultation platform for car accessories built with React, TypeScript, and Vite. The application allows users to browse and purchase car accessories while also offering expert consultation services and appointment booking.

## Project Structure
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Routing**: Wouter (lightweight React router)
- **UI Components**: Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Styling**: Tailwind CSS with custom design system

## Key Features
1. **E-commerce Functionality**
   - Product browsing with categories
   - Shopping cart with quantity management
   - Product search and filtering
   - Price display with sale badges

2. **Consultation Services**
   - Expert consultation booking
   - Service selection interface
   - Location-based services (Coimbatore, Tamil Nadu)

3. **Appointment Booking**
   - Calendar-based date selection
   - Time slot selection
   - Service duration and pricing

4. **Customer Support Chat**
   - Customer chat page with file upload (images & documents)
   - Admin chat interface for managing customer conversations
   - Real-time message display with mock data
   - Image attachment preview in chat
   - Customer search and filtering

5. **User Authentication**
   - Login and registration pages
   - Protected routes (ready for backend integration)

6. **Theme Support**
   - Light and dark mode toggle
   - Persistent theme preferences

## Tech Stack
- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.20
- Tailwind CSS 3.4.17
- Wouter 3.7.1 (routing)
- TanStack Query 5.90.2
- Radix UI components
- Lucide React (icons)

## Development
- **Dev Server**: Runs on port 5000
- **Host**: 0.0.0.0 (configured for Replit environment)
- **HMR**: Enabled on port 5000

## Current Status
- Frontend-only application (October 18, 2025)
- Mock data for products, cart, appointments, and chat conversations
- Authentication bypass in development mode
- Ready for backend integration
- SPA routing configured for deployment (vercel.json, _redirects)

## Recent Changes (October 18, 2025)
- Added customer support chat interface with file upload capabilities
- Created admin chat page for managing customer conversations
- Configured SPA routing fallback for deployment
- Added navigation links for Support Chat and Admin pages
- Installed @radix-ui/react-avatar and @radix-ui/react-scroll-area

## Notes
- The application uses path aliases: `@/` for src and `@assets/` for public
- All products, cart items, user data, and chat messages are currently mocked
- Checkout and booking functionality display alerts pending backend implementation
- File uploads in chat are frontend-only demos (no actual server storage)
- Chat pages hide the main header/footer for full-screen experience
