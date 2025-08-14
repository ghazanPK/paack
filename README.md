# PAACK - Pakistani Academic Community Korea

The premier organization for the Pakistani academic and professional community in South Korea.

## 🌟 About

PAACK (Pakistani Academic Community Korea) is dedicated to building a vibrant and supportive network for Pakistani doctors, researchers, and students in South Korea. Through collaboration, resource sharing, and advocacy, we aim to enhance the professional success and social well-being of our members.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Modular Architecture**: Clean, reusable components with TypeScript interfaces
- **Scroll Animations**: Smooth fade-in effects and custom CSS transitions
- **Modern Navigation**: Desktop and mobile-friendly navigation with dropdowns
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Interactive Portal**: Complete members-only section with dynamic content
- **Real-Time Search**: Advanced filtering and search functionality
- **Professional Profiles**: Detailed member profiles with expertise and affiliations
- **Official Team Structure**: Real PAACK cabinet data with proper documentation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS-in-JS (styled-jsx) + CSS Custom Properties
- **Font**: Inter (Google Fonts)
- **Icons**: Unicode emojis for cross-platform compatibility
- **State Management**: React Hooks (useState, useEffect)
- **Animations**: Custom CSS transitions and scroll animations

## 📁 Project Structure

```
src/
├── components/             # Reusable React components
│   ├── layout/             # Layout components (Header, Footer, etc.)
│   ├── sections/           # Page section components
│   └── ui/                 # UI components (buttons, modals, etc.)
├── hooks/                  # Custom React hooks
└── app/                    # Next.js app router pages
│   ├── about/              # About pages
│   ├── initiatives/        # Initiatives pages (formerly "what-we-do")
│   ├── get-involved/       # Get involved pages
│   ├── portal/             # Members-only portal (phase 2)
│   ├── resources/          # Public resources
│   ├── events/             # Events pages
│   ├── news/               # News pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
```

## 🎨 Design System

### Colors
- **Primary**: `#0d2c54` (Deep Blue)
- **Secondary**: `#006a4e` (Pakistani Green)
- **Accent**: `#fca311` (Vibrant Orange)
- **Light Gray**: `#f4f7f5`
- **Dark Gray**: `#333333`

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 🔗 Navigation Structure

- **About Us**
  - Our Mission & Vision (`/about/mission`)
  - Our Team (`/about/team`)
  - Our History (`/about/history`)
- **Initiatives** (`/initiatives`)
  - Advocacy & Support (`/initiatives/advocacy`)
  - Research & Collaboration (`/initiatives/research`)
  - Career Development (`/initiatives/careers`)
  - Community & Family Support (`/initiatives/community`)
- **Events** (`/events`)
- **Resources** (`/resources`)
- **News** (`/news`)
- **Get Involved** (`/get-involved`)
  - Become a Member (`/get-involved/membership`)
  - Partner With Us (`/get-involved/partner`)
  - Volunteer (`/get-involved/volunteer`)
- **Contact** (`/contact`)

## 📄 Pages Status

### ✅ Completed (Phase 1)
- **Home** (`/`) - Full landing page with hero, mission, pillars, events, and join sections
- **About Section** (`/about`) - Complete with enhanced content
  - `/about/mission` - Comprehensive mission, vision, values, and strategic goals
  - `/about/team` - Official PAACK cabinet members (Reference: PAACK/3S/2025.07.22)
  - `/about/history` - Detailed timeline and achievements
- **Contact** (`/contact`) - Contact information and form

### 🚧 In Progress / Coming Soon (Phase 1)
- **Initiatives** (`/initiatives`)
  - `/initiatives/advocacy`, `/initiatives/research`, `/initiatives/careers`, `/initiatives/community`
- **Events** (`/events`)
- **Resources** (`/resources`)
- **News** (`/news`)
- **Get Involved** (`/get-involved`)
  - `/get-involved/membership`, `/get-involved/partner`, `/get-involved/volunteer`

### ✅ Completed (Phase 2 - Members Portal)
- **Dashboard** (`/portal/dashboard`) - Activity feeds, quick stats, recent connections
- **Member Directory** (`/portal/directory`) - 12 diverse member profiles with search/filter
- **Member Profiles** (`/portal/profile/[username]`) - Dynamic routing with detailed profiles
- **Collaboration Hub** (`/portal/collaborate`) - Project management and expert consultation
  - `/portal/collaborate/project-board` - Active projects and collaboration tools
  - `/portal/collaborate/find-expert` - Expert search and consultation requests
- **Research & Resources** (`/portal/resources`) - Publications, funding, events
  - `/portal/resources/publications` - Academic papers and research
  - `/portal/resources/funding` - Grant opportunities and financial support
  - `/portal/resources/calendar` - Academic and community events
- **Community Hub** (`/portal/community`) - Forums, jobs, mentorship
  - `/portal/community/forums` - Discussion boards and community interaction
  - `/portal/community/jobs` - Job board and career opportunities
  - `/portal/community/mentorship` - Mentorship program and connections

## 🎯 Recent Updates

### Phase 2 Portal Implementation (Completed)
- ✅ **Full Members Portal**: Complete implementation of all 6 major portal sections
- ✅ **Diverse Member Profiles**: 12 detailed member profiles representing various academic fields
- ✅ **Interactive Features**: Search, filter, tab navigation, dynamic routing
- ✅ **Professional Design**: Modern UI with hover effects, gradients, and responsive layouts

### About Section Enhancement (Completed)
- ✅ **Official Team Data**: Real PAACK cabinet members (Reference: PAACK/3S/2025.07.22)
- ✅ **Comprehensive Mission Page**: Core values, strategic goals, and organizational vision
- ✅ **Interactive History Timeline**: 8 major milestones from 2018-2025
- ✅ **Enhanced Main About Page**: Statistics, services, and call-to-action sections

### Technical Improvements
- ✅ **Next.js 15 App Router**: Modern routing and server/client component architecture
- ✅ **TypeScript Integration**: Full type safety with interfaces and proper error handling
- ✅ **Client-Side Interactivity**: React hooks for state management and user interactions
- ✅ **Responsive Design**: Mobile-first approach with breakpoint-specific styling

## 🤝 Contributing

This project follows modern React/Next.js best practices with a focus on maintainability and scalability. All components are modular and reusable.

## 📞 Contact

For more information about PAACK, visit our website or contact us directly.

---

Built with ❤️ for the Pakistani community in Korea.
