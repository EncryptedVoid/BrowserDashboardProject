# Modern Personal Dashboard

![Dashboard Preview](https://via.placeholder.com/800x400?text=Dashboard+Preview)

## Overview

A sleek, modern personal dashboard built with web technologies to serve as your personalized browser homepage. This project features a beautiful glassmorphic UI with time-aware components, interactive calendars, and quick links to frequently used websites.

## Features

- **Real-time Clock & Date Display**: Shows current time with smooth animations
- **Smart Greetings**: Time-based greetings that change throughout the day
- **Interactive Calendar**: Visual monthly calendar with current day highlighted
- **Time Countdowns**: Displays time remaining until end of day, week, and month
- **Quick Access Links**: Organized grid of frequently used websites and services
- **Category Sections**: Grouped links for better organization
- **Glassmorphic UI**: Modern design with blur effects and subtle gradients
- **Responsive Layout**: Works on all screen sizes from mobile to desktop
- **Smooth Animations**: Polished transitions and hover effects
- **Dark Mode**: Eye-friendly dark theme optimized for all-day use

## Technologies Used

- HTML5
- CSS3 (with modern features like backdrop-filter, grid layout)
- Vanilla JavaScript
- Custom SVG icons

## Project Structure

- `dashboard.html` - Main HTML structure
- `dashboard.css` - Comprehensive styling with responsive design
- `dashboard.js` - Time/date management and animations
- `plans.md` - Development plans and notes

## Installation & Usage

### As a Browser Homepage

1. Clone or download this repository
2. Set the `index.html` file as your browser homepage

**Chrome:**
1. Settings → On startup → Open a specific page
2. Enter the file path: `file:///path/to/dashboard.html`

**Firefox:**
1. Preferences → Home → Homepage and new windows
2. Enter the file path: `file:///path/to/dashboard.html`

**Edge:**
1. Settings → Start, home, and new tabs → Open these pages
2. Enter the file path: `file:///path/to/dashboard.html`

### As a Local Web App

For full functionality or development:

```bash
# Using Python to run a local server
python -m http.server

# Then open http://localhost:8000 in your browser
```

## Planned Features

- **React Migration**: Refactoring the project into React components for better maintainability
- **Customizable Link Groups**: User-defined categories and link organization
- **Weather Integration**: Local weather forecasts with visual indicators
- **Note-Taking Widget**: Quick notes and reminders section
- **Todo List**: Simple task management
- **Search Bar Integration**: Quick search functionality for multiple engines
- **Theme Customization**: User-selectable color schemes and styles
- **User Profiles**: Support for multiple users with different configurations
- **Offline Support**: Service worker implementation for offline functionality
- **Link Analytics**: Track most-used links and optimize placement
- **Custom Backgrounds**: Upload or select from preset background options
- **Local Storage**: Persist user preferences between sessions
- **Cloud Sync**: Synchronize settings across devices
- **Keyboard Shortcuts**: Quick navigation with keyboard
- **Widget System**: Drag-and-drop customizable widget layout
- **Performance Metrics**: System status and network information

## React Migration Plan

As outlined in the project notes, the dashboard will be migrated to React for better:

1. **Component Structure**: Breaking the UI into reusable components
2. **State Management**: Cleaner handling of dynamic content
3. **Code Organization**: Modular approach to features
4. **Maintainability**: Easier to update and extend

The migration will involve:
- Converting HTML/CSS to JSX components
- Implementing React hooks for state management
- Creating a component hierarchy
- Setting up a proper build process