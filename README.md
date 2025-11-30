# Distinct Patterns - E-Commerce Platform

> A modern, full-stack e-commerce platform built with Next.js, React, and Sanity CMS as part of the ALX ProDev Frontend Engineering Program.

## 🚀 Live Demo

[View Live Application](https://your-app-url.vercel.app)

## 📋 Project Overview

Distinct Patterns is a comprehensive e-commerce platform showcasing modern web development practices with a focus on user experience, performance, and scalability.

### Key Features

- **🛍️ Product Catalog** - Dynamic product showcase with detailed views
- **🛒 Shopping Cart** - Full cart functionality with quantity management
- **💳 Payment Integration** - Secure payments with Paystack
- **📱 Responsive Design** - Mobile-first approach with modern UI
- **🎨 Interactive Components** - Smooth animations with Framer Motion
- **🔍 Product Search** - Advanced filtering and search capabilities
- **📊 Content Management** - Powered by Sanity CMS

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 18, TypeScript
- **Styling:** Tailwind CSS, Radix UI Components
- **Backend:** Sanity CMS
- **Payments:** Paystack Integration
- **Animations:** Framer Motion
- **State Management:** React Context API
- **Deployment:** Vercel

## 📁 Project Structure

```
distinct-pattern/
├── app/                 # Next.js app router
│   ├── about/          # About page
│   ├── blog/           # Blog section
│   ├── cart/           # Shopping cart
│   ├── checkout/       # Checkout process
│   └── products/       # Product pages
├── components/          # React components
│   ├── cards/          # Product cards
│   ├── ui/             # Reusable UI components
│   └── [various]/      # Feature components
├── context/            # React context providers
├── sanity/             # Sanity CMS configuration
├── public/             # Static assets
└── styles/             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Sanity account (for CMS)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kodget/alx-project-nexus.git
   cd alx-project-nexus/distinct-pattern
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Sanity CMS**
   - Create a Sanity project at [sanity.io](https://sanity.io)
   - Update `sanity/sanityClient.js` with your project credentials

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Features Deep Dive

### E-Commerce Functionality
- **Product Management:** Dynamic product catalog with categories
- **Shopping Cart:** Add, remove, and modify cart items
- **Checkout Process:** Streamlined checkout with payment integration
- **User Experience:** Smooth animations and responsive design

### Content Management
- **Sanity CMS:** Headless CMS for product and content management
- **Dynamic Content:** Real-time content updates
- **Image Optimization:** Sanity's built-in image optimization

### Performance Features
- **Next.js Optimization:** Automatic code splitting and optimization
- **Image Optimization:** Next.js Image component with lazy loading
- **SEO Friendly:** Meta tags and structured data

## 📱 Responsive Design

- **Mobile-First:** Optimized for mobile devices
- **Cross-Browser:** Compatible across all modern browsers
- **Touch-Friendly:** Optimized for touch interactions
- **Accessibility:** WCAG compliant design patterns

## 🚀 Deployment

This application can be deployed on Vercel, Netlify, or any Node.js hosting platform.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kodget/alx-project-nexus)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
PAYSTACK_PUBLIC_KEY=your_paystack_key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the ALX ProDev Frontend Engineering Program.

## 🙏 Acknowledgments

- **ALX ProDev Program** for the learning opportunity
- **Sanity** for the headless CMS platform
- **Paystack** for payment processing
- **Vercel** for hosting and deployment

---

**Built with ❤️ as part of the ALX ProDev Frontend Engineering Program**