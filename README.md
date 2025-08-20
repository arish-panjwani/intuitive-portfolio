# 🚀 Modern Portfolio Website

📁 This portfolio is dynamically generated using a single `portfolio.json` file for all content, sections, and chatbot knowledge — no code changes needed to update content!

A stunning, responsive portfolio website built with Next.js, TypeScript, and Framer Motion. Features dark mode, performance optimization, and an AI-powered chatbot that knows everything about you!

[![Netlify Status](https://api.netlify.com/api/v1/badges/fd7afa5f-ee85-49ac-8a12-7eee74035078/deploy-status)](https://app.netlify.com/projects/arishpanjwani/deploys)

---

## ✨ Features

### 🎨 **Design & UI**
- **Responsive Design** - Looks perfect on all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Modern Animations** - Smooth Framer Motion animations throughout
- **Performance Toggle** - Switch between animated and optimized modes
- **Gradient Backgrounds** - Beautiful gradient overlays and effects
- **Custom Illustrations** - Dynamic illustrations that change with theme

### 🧠 **AI-Powered Chatbot**
- **Intelligent Assistant** - AI chatbot that knows your background, skills, and experience
- **Dynamic Responses** - Contextual answers based on your portfolio data
- **Real-time Chat** - Smooth chat interface with typing indicators
- **Knowledge Base** - Automatically synced with your `portfolio.json` data

### 📱 **Sections**
- **Hero Section** - Eye-catching landing with animated elements
- **About** - Personal introduction with dynamic badges
- **Education** - Timeline view of academic achievements
- **Experience** - Professional journey with company logos
- **Projects** - Showcase of featured work with tech stacks
- **Tech Stack** - Animated carousel of skills and proficiencies *(data-driven from JSON)*
- **Contact** - Contact form and social links

### ⚡ **Performance**
- **Optimized Loading** - Fast page loads with Next.js optimization
- **Lazy Loading** - Images and components load when needed
- **Performance Mode** - Disable animations for better performance
- **SEO Friendly** - Optimized for search engines

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Data:** JSON-based configuration

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd intuitive-portfolio

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Update your data**

```bash
# Edit the portfolio data file
nano data/portfolio.json
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

```arduino
http://localhost:3000
```

## 📝 Configuration
### Portfolio Data (data/portfolio.json)
The entire website is dynamically driven by a single JSON configuration file. Update this file to customize:

- Personal information
- Bio & intro
- Education history
- Work experience
- Project showcase
- Tech stack & proficiency
- Chatbot knowledge base

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "location": "Your City, Country",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  },
  "about": {
    "greeting": "Your introduction",
    "description": "Your detailed description"
  },
  "education": [...],
  "experience": [...],
  "projects": [...],
  "techStack": {...}
}
```

### Images
Place your images in the public/images/ directory:

```bash
public/images/
├── arish-hero-bg.jpeg          # Hero background
├── illustration-casual.png     # Light mode illustration
├── illustration-dark-mode.png  # Dark mode illustration
└── logos/
    ├── company1.png            # Company/Institution logos
    └── company2.png
```

### 🎨 Customization

#### Colors & Themes

- Tailwind gradients and utility classes
- Custom color palette support
- Framer Motion animation variants
- Light/dark mode toggle logic

#### Components
Modular component structure for easy extension:

```bash
components/
├── layout/                     # Layout and header/footer
├── sections/                   # Homepage sections (Hero, About, etc.)
├── projects/                   # Projects grid/cards
├── tech-stack/                 # Animated tech carousel
└── chatbot/                    # AI chatbot component
```

### 🤖 AI Chatbot Configuration

The chatbot requires no setup — it learns everything from ```portfolio.json```.

It can answer questions about:
- Your background and experience
- Skills and tech stack
- Work and academic history
- Projects and tools
- Contact info

### 📱 Responsive Design

Breakpoints:
- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: > 1024px

All components adapt fluidly across breakpoints.

### ⚡ Performance Optimization

- Next.js automatic code splitting
- Lazy loading with suspense boundaries
- Image optimization via Next.js Image
- Toggleable performance mode (reduces motion & load)

### 🔧 Development
Scripts
```bash

npm run dev       # Start development server
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

### 🤝 Contributing
1. Fork this repo
2. Create a feature branch
3. Make your changes
4. Open a PR with screenshots if visual

### 📄 License
Open source under the MIT License.

### 🙏 Acknowledgments

- **Next.js** – App Router magic  
- **Tailwind CSS** – Utility-first styling  
- **Framer Motion** – Smooth animation engine  
- **shadcn/ui** – Clean UI components  
- **Lucide** – Icon set  
- **V0** – AI-powered UI generation and prototyping  
- **ChatGPT** – AI assistance for development, content, and documentation

Made with ❤️ and lots of ☕
