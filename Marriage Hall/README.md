# Marriage Hall Website - Component-Based Architecture

## 🏛️ Project Overview

This is a modern, responsive marriage hall website built with a component-based architecture. The website features a transparent header navbar, elegant design, and modular components for easy maintenance and scalability.

## 📁 Project Structure

```
Marriage Hall/
├── index.html                 # Main HTML file with component containers
├── styles.css                 # Base styles and utilities
├── components/                # Component directory
│   ├── header.html           # Header component HTML
│   ├── hero.html             # Hero section HTML
│   ├── booking.html          # Booking form HTML
│   ├── about.html            # About section HTML
│   ├── services.html         # Services section HTML
│   ├── contact.html          # Contact section HTML
│   ├── css/                  # Component-specific CSS
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── booking.css
│   │   ├── about.css
│   │   ├── services.css
│   │   └── contact.css
│   └── js/                   # Component-specific JavaScript
│       ├── component-loader.js
│       ├── header.js
│       ├── hero.js
│       ├── booking.js
│       ├── about.js
│       ├── services.js
│       └── contact.js
└── README.md                 # This file
```

## 🧩 Components

### 1. Header Component
- **File**: `components/header.html`
- **Features**: Transparent background, navigation menu, location info, profile icon
- **Functionality**: Scroll effects, mobile menu, smooth scrolling

### 2. Hero Component
- **File**: `components/hero.html`
- **Features**: Full-screen hero with background image, play button, elegant typography
- **Functionality**: Parallax effect, video modal integration

### 3. Booking Component
- **File**: `components/booking.html`
- **Features**: Interactive booking form with date pickers and dropdowns
- **Functionality**: Form validation, date validation, submission handling

### 4. About Component
- **File**: `components/about.html`
- **Features**: About section with image gallery
- **Functionality**: Image modal, gallery interactions, animations

### 5. Services Component
- **File**: `components/services.html`
- **Features**: Service cards with detailed information
- **Functionality**: Service modals, hover effects, detailed service information

### 6. Contact Component
- **File**: `components/contact.html`
- **Features**: Contact information and contact form
- **Functionality**: Click-to-call, email integration, form validation

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Component loading**: The component loader automatically loads all components
3. **Development**: Each component can be modified independently

## 🛠️ Component System

### Component Loader
The `component-loader.js` handles:
- Dynamic loading of HTML, CSS, and JS files
- Component injection into the DOM
- Error handling and loading states

### Component Structure
Each component consists of:
- **HTML**: Component markup
- **CSS**: Component-specific styles
- **JavaScript**: Component functionality and interactions

## 🎨 Design Features

- **Transparent Header**: Glassmorphism effect with backdrop blur
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern UI**: Clean, elegant design with smooth animations
- **Interactive Elements**: Hover effects, modals, and form validation
- **Accessibility**: Keyboard navigation and screen reader support

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Key Features

### Header
- Fixed transparent navigation
- Location information
- Mobile-responsive menu
- Smooth scroll navigation

### Hero Section
- Full-screen background image
- Parallax scrolling effect
- Call-to-action elements
- Video integration ready

### Booking Form
- Date validation
- Event type selection
- Facilities selection
- Form submission handling

### About Section
- Image gallery with modal
- Animated content
- Responsive grid layout

### Services
- Interactive service cards
- Detailed service modals
- Pricing information
- Feature highlights

### Contact
- Click-to-call functionality
- Email integration
- Contact form with validation
- Location mapping

## 🔧 Customization

### Adding New Components
1. Create HTML, CSS, and JS files in the components directory
2. Add the component name to the `components` array in `component-loader.js`
3. Add a container div in `index.html`

### Modifying Existing Components
- Edit the respective HTML, CSS, or JS files
- Changes are automatically reflected when the page reloads

### Styling
- Base styles are in `styles.css`
- Component-specific styles are in `components/css/`
- Use CSS custom properties for easy theming

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: info@balasaraswathihall.com
- Phone: +91 98765 43210

---

**Built with ❤️ for Bala Saraswathi Conventional Hall**
