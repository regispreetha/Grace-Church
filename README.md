# Grace Covenant Church Website

A modern, responsive church website built with React, TypeScript, and Vite.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- ⚡ Fast loading times with Vite
- 🎯 SEO-friendly structure
- 🔒 Secure and optimized for production
- 🚀 Ready for Netlify deployment

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Grace-Church
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to Netlify

### Option 1: Drag and Drop

1. Run `npm run build`
2. Drag the `dist` folder to Netlify's deployment page

### Option 2: Git Integration

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically build and deploy your site

### Configuration

The project includes:
- `netlify.toml` - Build and redirect configuration
- `public/_redirects` - SPA routing support

## Project Structure

```
Grace-Church/
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── icons.tsx
├── data/               # Mock data and content
│   └── mockData.ts
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── SermonsPage.tsx
│   ├── SermonDetailPage.tsx
│   ├── EventsPage.tsx
│   ├── EventDetailPage.tsx
│   ├── MinistriesPage.tsx
│   ├── GivePage.tsx
│   └── ContactPage.tsx
├── public/             # Static assets
│   └── artifacts/      # Images
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── types.ts            # TypeScript types
└── vite.config.ts      # Vite configuration
```

## Customization

### Updating Church Information

Edit `data/mockData.ts` to update:
- Church contact information
- Service times
- Sermons
- Events
- Ministries
- Staff members

### Styling

The site uses Tailwind CSS with custom brand colors:
- `brand-blue`: #1a365d
- `brand-dark-blue`: #0a1929
- `brand-gold`: #d4af37
- `brand-cream`: #faf8f3
- `brand-teal`: #0d9488
- `brand-navy`: #1e3a5f

Colors can be customized in `index.html` under the Tailwind config.

### Adding Images

Place images in the `public/artifacts/` directory and reference them as `/artifacts/filename.png`.

## Performance

- Code splitting for optimal loading
- Lazy loading for images
- Optimized animations
- Efficient caching strategy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Grace Covenant Church

## Support

For questions or issues, please contact connect@gracecovenant.org
