# Exvuma.me - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Technologies Used

- **Vite** - Fast build tool and development server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components

## Getting Started

### Prerequisites

- Node.js (v18.18.0 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd exvuma.me
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── types/         # TypeScript type definitions
└── data/          # Static data and content
```

## Deployment

This project can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the project for production:
```sh
npm run build
```

The built files will be in the `dist/` directory.
