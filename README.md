# Helvetia PUB - Brienz, Switzerland

A modern, responsive website for Helvetia PUB featuring a stunning landing page with parallax effects, online ordering system, and bilingual support (German/English).

## 🍺 Features

### 🎨 Design & User Experience
- **Parallax Scrolling**: Background image stays fixed while content scrolls over it
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Sticky Navigation**: Always accessible navigation bar with smooth scrolling
- **Language Switcher**: Floating language switch (🇩🇪 DE / 🇬🇧 EN)
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Glass Morphism**: Modern glass effect components

### 🌐 Content Sections
1. **Hero Section**: Welcome message with call-to-action buttons
2. **About Section**: Pub story and features with animated statistics
3. **Menu Section**: Complete food & drink menu with filtering
4. **Order System**: Online ordering with cart functionality
5. **Location**: Contact info, opening hours, and Google Maps integration
6. **Footer**: Legal information and social media links

### 🛒 Online Ordering System
- **Cart Management**: Add/remove items with quantity controls
- **Order Types**: Dine-in or takeaway options
- **Payment Methods**: Cash and SumUp integration
- **Order Notes**: Custom notes for each item
- **Table Numbers**: Optional table number for dine-in orders

### 📱 Technical Features
- **Next.js 14**: App Router with TypeScript
- **TailwindCSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Responsive**: Mobile-first design approach
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and code splitting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/helvetia-pub.git
   cd helvetia-pub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Add background image**
   Place your pub background image in `public/images/helvetia-pub-bg.jpg`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Sticky navigation
│   ├── HeroSection.tsx    # Hero section with parallax
│   ├── AboutSection.tsx   # About pub section
│   ├── MenuSection.tsx    # Menu with filtering
│   ├── OrderSection.tsx   # Online ordering system
│   ├── LocationSection.tsx # Contact and map
│   └── Footer.tsx         # Footer with legal links
├── contexts/              # React contexts
│   └── LanguageContext.tsx # Language management
├── data/                  # Static data
│   ├── menu.ts           # Drink menu data
│   ├── food-menu.ts      # Food menu data
│   └── pub-info.ts       # Pub information
└── types/                # TypeScript interfaces
    └── index.ts          # Type definitions
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.ts`:
```typescript
colors: {
  'pub-yellow': { /* Custom yellow palette */ },
  'pub-dark': { /* Custom dark palette */ }
}
```

### Menu Items
Edit menu data in `src/data/menu.ts` and `src/data/food-menu.ts`:
```typescript
{
  id: 'item-id',
  name: { de: 'German Name', en: 'English Name' },
  description: { de: 'German Description', en: 'English Description' },
  price: 12.50,
  category: 'category-name',
  available: true
}
```

### Pub Information
Update pub details in `src/data/pub-info.ts`:
```typescript
export const pubInfo: PubInfo = {
  name: { de: 'Helvetia PUB', en: 'Helvetia PUB' },
  address: { /* Address details */ },
  phone: '+41 33 951 23 45',
  email: 'info@helvetia-pub.ch',
  // ... other details
};
```

## 🌍 Internationalization

The website supports German and English languages. All text content is managed through the `LanguageContext` and translation keys.

### Adding New Languages
1. Add language code to the `Language` interface in `src/types/index.ts`
2. Add translations to the `translations` object in `src/contexts/LanguageContext.tsx`
3. Update the language switcher in `Navigation.tsx`

## 🗄️ Backend Integration

### Supabase Setup (Optional)
For full functionality including admin panel and order management:

1. **Create Supabase project**
2. **Set up database tables**:
   ```sql
   -- Menu items table
   CREATE TABLE menu_items (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name JSONB NOT NULL,
     description JSONB,
     price DECIMAL(10,2) NOT NULL,
     category TEXT NOT NULL,
     available BOOLEAN DEFAULT true,
     created_at TIMESTAMP DEFAULT NOW()
   );

   -- Orders table
   CREATE TABLE orders (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     items JSONB NOT NULL,
     total DECIMAL(10,2) NOT NULL,
     table_number TEXT,
     is_takeaway BOOLEAN DEFAULT false,
     notes TEXT,
     status TEXT DEFAULT 'pending',
     payment_method TEXT DEFAULT 'cash',
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

3. **Add environment variables**:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices:
- Touch-friendly navigation
- Optimized images and loading
- Mobile-first design approach
- PWA-ready (can be extended)

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

## 📄 Legal Compliance

The website includes all required legal sections:
- **Impressum** (Legal Notice)
- **Privacy Policy** (GDPR compliant)
- **Terms & Conditions**
- **Cookie Notice** (GDPR compliant)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: info@helvetia-pub.ch
- Phone: +41 33 951 23 45

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons

---

**Made with ❤️ in Switzerland** 🇨🇭
