<div align="center">
  <h1>🐷 QUIET PIGGY ($PIGGY)</h1>
  <p><em>They told us to BE QUIET. WE GOT LOUDER.</em></p>
</div>

## About

A digital pig with a microphone vs. a presidential "shhh". Quiet Piggy is a meme coin project built with React, TypeScript, and Vite. The website features a classified documents theme with dry humor, interactive elements, and smooth animations.

## Features

- 🎯 **Smooth Scroll Animations** - Seamless navigation with smooth scrolling
- 🎉 **Confetti Effects** - Celebratory animations on button clicks
- 📄 **The Files Modal** - Detailed classified documents with interactive redacted text
- 🎬 **Loading Screen** - Animated loading screen with piggy mascot
- 📱 **Responsive Design** - Mobile-first responsive layout
- ✨ **Interactive Elements** - Hover effects, animations, and parallax scrolling

## Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Beautiful charts for tokenomics
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/quietpiggy.git
cd quietpiggy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
quietpiggy/
├── components/         # React components
│   ├── Navbar.tsx     # Navigation bar with smooth scroll
│   ├── Hero.tsx       # Hero section with CTA buttons
│   ├── IncidentReport.tsx  # Classified incident report
│   ├── Tokenomics.tsx      # Token distribution chart
│   ├── FlightPlan.tsx      # Roadmap timeline
│   ├── Footer.tsx          # Footer with social links
│   ├── LoadingScreen.tsx   # Loading screen animation
│   ├── Confetti.tsx        # Confetti animation component
│   └── TheFilesModal.tsx   # Classified files modal
├── public/            # Static assets
│   └── assets/
│       └── images/
│           └── piggy-logo.png
├── utils/             # Utility functions
│   └── scrollTo.ts    # Smooth scroll helper
├── App.tsx            # Main app component
├── index.html         # HTML template
└── vite.config.ts     # Vite configuration
```

## Features in Detail

### Loading Screen
Animated loading screen that appears on initial page load with progress indicator and themed messages.

### Smooth Scroll Navigation
All navbar links use smooth scrolling with proper offset for the fixed navbar.

### Confetti Animation
Celebratory confetti animation triggered when clicking the "BUY $PIGGY" button.

### The Files Modal
Interactive modal displaying classified documents with:
- Redacted text that reveals on hover
- Multiple sections with dry humor
- Document-style design with stamps and staples
- ESC key or click outside to close

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is for entertainment purposes only. No pigs were silenced during development.

## Disclaimer

$PIGGY is a meme coin with no intrinsic value or expectation of financial return. The coin is for entertainment purposes only. Not affiliated with any government agency, obviously.

---

<div align="center">
  <p>© 2024 Quiet Piggy Administration</p>
  <p><em>Not classified. Actually, very public.</em></p>
</div>
