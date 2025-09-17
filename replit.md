# Overview

This is a healthcare platform application called "HealNet" built with a modern full-stack architecture. The application enables users to book medical appointments, conduct online consultations, manage prescriptions, and connect with healthcare specialists. It features a React-based frontend with shadcn/ui components, an Express.js backend, and PostgreSQL database integration using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system variables
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation via hookform/resolvers

## Backend Architecture  
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with middleware for request logging and error handling
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Development**: Hot reload with tsx and custom Vite integration
- **Build**: esbuild for production bundling

## Database Design
- **Database**: PostgreSQL via Neon serverless
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Type Safety**: Drizzle-Zod integration for runtime validation
- **Tables**: Users table with authentication fields (username, password)
- **Storage Layer**: Abstracted IStorage interface with in-memory fallback for development

## Development Infrastructure
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reloading**: Custom Vite setup with Express middleware integration
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Error Handling**: Runtime error overlay for development
- **Logging**: Custom request/response logging middleware

## Design System
- **Fonts**: Manrope and Clash Display from Google Fonts
- **Color Palette**: Custom CSS variables for primary blues and neutrals
- **Components**: Comprehensive shadcn/ui component library
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Animations**: Custom fade-in animations and Tailwind utilities

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools
- **express**: Web application framework for the backend API
- **react**: Frontend framework for building user interfaces
- **@tanstack/react-query**: Server state management and caching

## UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Conditional className utility
- **lucide-react**: Icon library for consistent iconography

## Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety across the entire application
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Platform
- **Netlify Functions**: Serverless function deployment for API endpoints
- **Replit**: Primary development and hosting environment with custom integrations