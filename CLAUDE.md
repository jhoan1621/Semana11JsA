# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite application using React 19.1.0 and Vite 6.3.5. The project is set up as an ES module (type: "module" in package.json).

The application is a simple login form for UTP (Universidad Tecnológica del Perú) students, designed as an introductory example for students learning React.

## Essential Commands

```bash
# Development
npm run dev      # Start development server with HMR (http://localhost:5173)

# Building
npm run build    # Build for production (output to dist/)
npm run preview  # Preview production build locally

# Code Quality
npm run lint     # Run ESLint checks
```

## Architecture

- **Build Tool**: Vite with @vitejs/plugin-react for Fast Refresh
- **Entry Points**: 
  - HTML: `index.html` (Vite uses this as the entry point)
  - JavaScript: `src/main.jsx` → renders `src/App.jsx`
- **Styling**: 
  - Bootstrap 5.3.6 for UI components
  - `index.css` for global styles
  - `App.css` for app-specific styles
- **Components**:
  - `src/components/Login.jsx` - Login form with UTP email validation

## Development Notes

- ESLint is configured with React-specific rules including hooks and refresh plugins
- No testing framework is currently set up
- Bootstrap is imported in `src/main.jsx` for global styling
- The login component validates emails ending with `@utp.edu.pe`
- Build output goes to `dist/` directory (gitignored)

## Key Features

- Simple login form for educational purposes
- Email validation for UTP institutional emails
- Responsive design using Bootstrap grid system
- Spanish comments for better understanding by students
- Basic state management with useState hook