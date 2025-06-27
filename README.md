# Wynn AI Solutions Portfolio

A modern, responsive portfolio website showcasing AI development and software engineering expertise. Built with React, Tailwind CSS, and deployed on GitHub Pages.

## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Interactive Elements**: Floating particles and glow effects
- **Responsive Layout**: Optimized for all device sizes
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Lazy loading and optimized assets
- **Custom Domain**: Deployed at [wynnsolutionsmyanmar.com](https://wynnsolutionsmyanmar.com)

## 🚀 Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Deployment**: GitHub Pages
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/
│   ├── FloatingParticles.js    # Animated background particles
│   └── GlowEffect.js           # Interactive glow effects
├── App.js                      # Main portfolio component
├── index.js                    # React app entry point
└── index.css                   # Global styles and Tailwind imports
```

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/HeinThuraWynnn/HeinThuraWynnn.github.io.git
cd HeinThuraWynnn.github.io

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

- `npm start` - Runs the development server
- `npm run build` - Creates production build
- `npm run deploy` - Deploys to GitHub Pages
- `npm test` - Runs tests

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using the `gh-pages` branch:

```bash
# Build and deploy
npm run deploy
```

### Branch Structure
- `main` - Source code and development
- `gh-pages` - Built files for GitHub Pages deployment

### Custom Domain Setup

The site uses a custom domain configuration:
- Primary: `wynnsolutionsmyanmar.com`
- WWW: `www.wynnsolutionsmyanmar.com`

DNS configuration:
- A records pointing to GitHub Pages IPs
- CNAME record for www subdomain

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## ⚡ Performance Optimizations

- Lazy loading for heavy components
- Optimized images and assets
- Minimal bundle size
- Efficient re-renders with React hooks

## 🎨 Customization

To customize the portfolio:

1. **Content**: Edit sections in `src/App.js`
2. **Styling**: Modify Tailwind classes or `src/index.css`
3. **Components**: Update `src/components/` files
4. **Configuration**: Adjust `tailwind.config.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
