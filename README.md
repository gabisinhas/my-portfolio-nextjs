bash
bash
bash
npm run build - Creates a production build
npm run start - Builds and exports the project as static files
npm run lint - Runs ESLint
# 🚀 Portfolio Next.js - Gabriela

A modern, responsive portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- 🎨 **Responsive Design** — Adapts to all devices
- 🌙 **Dark/Light Mode** — Full theme support
- ⚡ **Optimized Performance** — Next.js 15 App Router
- 🎭 **Smooth Animations** — Framer Motion
- 📱 **PWA Ready** — Progressive Web App
- 🔧 **TypeScript** — Type safety everywhere
- 🎯 **SEO Optimized** — Meta tags & structure

## 🛠️ Technologies

- **Next.js** 15.4.4
- **React** 19.1.0
- **TypeScript**
- **Tailwind CSS** 4
- **Framer Motion**
- **React Icons**, **Heroicons**
- **React Hot Toast**

## 📁 Project Structure

```text
src/
├── app/         # App Router (about, contact, projects, layout, home)
├── components/  # Reusable UI (layout, sections, ui)
├── data/        # Project & skills data
├── hooks/       # Custom React hooks
├── lib/         # Utilities & configs
├── context/     # Context providers
└── types/       # TypeScript definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/gabisinhas/my-portfolio-nextjs.git
cd my-portfolio-nextjs
npm install
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📊 Pages

- **Home** (`/`) — Personal introduction
- **About** (`/about`) — Skills & experience
- **Projects** (`/projects`) — Portfolio
- **Contact** (`/contact`) — Contact form & info

## 🎨 Customization

**Personal Data:**
- Edit files in `src/data/`:
	- `personal-info.ts` — Personal info & social links
	- `projects.ts` — Portfolio projects
	- `skills.ts` — Skills & technologies

**Colors & Theme:**
- Edit `src/app/globals.css` and `tailwind.config.mjs`

**Animations:**
- Edit `src/lib/animations.ts`

## 📱 Responsiveness

Tested on:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔧 Environment Setup

Create a `.env.local` file if needed:

```env
NEXT_PUBLIC_SITE_URL=https://your-portfolio.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📈 Performance

- ⚡ Lighthouse Score: 95+
- 🎯 Core Web Vitals: Optimized
- 📦 Bundle size optimized
- 🖼️ Images optimized with Next.js Image

## 🤝 Contribution

1. Fork the project
2. Create a branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add some AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

MIT — see [LICENSE](LICENSE)

## 👨‍💻 Author

**Gabriela**  
[GitHub: @gabisinhas](https://github.com/gabisinhas)  
LinkedIn: [Your LinkedIn](https://linkedin.com/in/seu-perfil)  
Email: seu-email@example.com

---

⭐ If this project helped you, consider giving it a star!

Built with ❤️ using Next.js and TypeScript
Home (/) - Personal introduction and overview

About (/about) - Detailed info, skills, and experience

Projects (/projects) - Portfolio of completed projects

Contact (/contact) - Contact form and personal info

🎨 Customization
Personal Data
Edit the files in /src/data/ to customize:

personal-info.ts - Personal information and social links

projects.ts - Portfolio projects

skills.ts - Skills and technologies

Colors and Theme
Configure in /src/app/globals.css and Tailwind config.

Animations
Customize animations in /src/lib/animations.ts.

📱 Responsiveness
The project is fully responsive and tested on:

📱 Mobile (320px+)

📱 Tablet (768px+)

💻 Desktop (1024px+)

🖥️ Large screens (1440px+)

🔧 Environment Setup
Create a .env.local file for environment variables (if needed):

env
Copy code
# Example variables
NEXT_PUBLIC_SITE_URL=https://your-portfolio.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
📈 Performance
⚡ Lighthouse Score: 95+

🎯 Core Web Vitals: Optimized

📦 Bundle size optimized

🖼️ Images optimized with Next.js Image

🤝 Contribution
Fork the project

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License. See LICENSE for details.

👨‍💻 Author
Gabriela

GitHub: @gabisinhas

LinkedIn: Your LinkedIn

Email: your-email@example.com

⭐ If this project helped you, consider giving it a star!

Built with ❤️ using Next.js and TypeScript

