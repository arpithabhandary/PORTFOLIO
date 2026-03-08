# 🌊 Arpitha Bhandary - Ocean-Themed Developer Portfolio

A stunning, modern developer portfolio website featuring immersive 3D animations, ocean-inspired design, and cinematic interactions. Built with cutting-edge web technologies for a premium user experience.

## ✨ Features

### 🎨 Design & Aesthetics
- **Ocean-Inspired Theme** with deep blues and glowing accent colors
- **Glassmorphism UI** elements for a modern, sleek look
- **Responsive Design** that works perfectly on all devices
- **Dark Mode** by default with high contrast for readability

### 🎬 Animations & Interactions
- **3D Ocean Scene** with floating particles and wave distortions using Three.js
- **Parallax Scrolling** for depth and immersion
- **Smooth Page Transitions** with Framer Motion
- **Interactive Hover Effects** on all components
- **Mouse-Tracking Animations** for dynamic visual feedback
- **Particle System** with floating elements throughout the page

### 🛠️ Technical Stack
- **Next.js 14** - React framework with Server-Side Rendering
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **GSAP** - Advanced animation library
- **React Three Fiber** - React renderer for Three.js

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm installed
- Git (optional, for version control)

### Setup Steps

1. **Clone or Download the Repository**
   ```bash
   cd portfolio-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000`

## 🚀 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run ESLint for code quality
npm run lint
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Hero.tsx            # Hero section with 3D intro
│   ├── OceanScene.tsx      # Three.js ocean scene
│   ├── Navigation.tsx      # Sticky navbar
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Projects.tsx        # Projects grid
│   ├── Experience.tsx      # Timeline experience
│   ├── Achievements.tsx    # Badges and awards
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with links
│   ├── FloatingParticles.tsx # Particle effects
│   └── MouseGlow.tsx       # Cursor glow effect
├── public/                 # Static assets
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎯 Key Sections

### 1. **Hero Section**
- Immersive 3D ocean environment
- Animated text with letter reveal effects
- Call-to-action buttons
- Smooth scroll indicator

### 2. **Navigation**
- Sticky glassmorphism navbar
- Active section indicators
- Smooth scroll navigation
- Social media links

### 3. **About**
- Profile section with floating ring animation
- Personal introduction
- Quick stats highlights
- Parallax background effects

### 4. **Skills**
- Categorized skill showcase
- Animated progress bars
- Glowing skill cards
- Technologies list

### 5. **Projects**
- Project grid with hover effects
- 3D card tilting
- Technology tags
- GitHub links

### 6. **Experience**
- Timeline layout
- Animated timeline dots
- Growing timeline line
- Company descriptions

### 7. **Achievements**
- Badge-style achievements
- Glow pulse animations
- Statistics display
- Hover reveal effects

### 8. **Contact**
- Contact information cards
- Functional contact form
- Social media links
- Interactive input fields

### 9. **Footer**
- Wave animation effect
- Quick links
- Social media connections
- Copyright information

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.ts` to customize the ocean theme:

```typescript
colors: {
  ocean: {
    dark: '#0A192F',      // Dark ocean blue
    deep: '#112240',      // Deep blue
    light: '#64B5F6',     // Light blue
    accent: '#00D9FF',    // Cyan accent
  },
}
```

### Content
1. **Hero Section**: Edit `components/Hero.tsx` to change the name and title
2. **About Section**: Update `components/About.tsx` with your bio
3. **Skills**: Modify the skills object in `components/Skills.tsx`
4. **Projects**: Add your projects to the projects array in `components/Projects.tsx`
5. **Experience**: Update experiences in `components/Experience.tsx`
6. **Achievements**: Customize achievements in `components/Achievements.tsx`
7. **Contact**: Update contact info in `components/Contact.tsx`

### Animations
- Modify animation durations in `app/globals.css`
- Adjust Framer Motion delays and transitions in individual components
- Customize Three.js shader effects in `components/OceanScene.tsx`

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile** (< 768px) - Optimized touch interactions
- **Tablet** (768px - 1024px) - Adjusted layouts
- **Desktop** (> 1024px) - Full experience with all effects

## ⚡ Performance Optimization

- Next.js automatic code splitting
- Image optimization with Next.js Image component
- CSS animations use GPU acceleration
- Lazy loading for components
- Efficient motion animations with Framer Motion

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### 3D Scene Not Rendering
- Check browser WebGL support
- Ensure Three.js is properly installed
- Clear browser cache and restart

### Slow Animations
- Disable particle effects in `components/FloatingParticles.tsx`
- Reduce the number of particles: `const particleCount = 15`
- Disable 3D ocean scene for low-end devices

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Deploy to Other Platforms
This Next.js project can be deployed to any Node.js hosting:
- AWS
- Heroku
- Railway
- Digital Ocean
- etc.

## 📚 learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)

## 🎓 Tips for Enhancement

1. **Add Your Own Images**: Replace placeholder profile image
2. **Connect Contact Form**: Integrate with email service (EmailJS, Formspree, etc.)
3. **Add Dark/Light Toggle**: Implement theme switcher
4. **Blog Section**: Add a blog with markdown support
5. **Analytics**: Integrate Google Analytics or similar
6. **SEO**: Add meta tags and structured data

## 📄 License

This project is open source and available for personal use and adaptation.

## 🤝 Contributing

Feel free to fork this repository and create pull requests for any improvements!

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments
3. Consult the relevant library documentation

---

## 🌟 Credits

Built with ❤️ using:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/)

---

**Happy Coding! 🚀** 

*Make this portfolio your own and showcase your amazing work to the world!*
