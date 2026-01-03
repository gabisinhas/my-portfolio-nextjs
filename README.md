# 🚀 Portfolio Next.js - Gabriela

A modern and responsive portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Responsive Design**: Interface adapts to all devices
- 🌙 **Dark/Light Mode**: Full support for light and dark themes
- ⚡ **Optimized Performance**: Next.js 15 with App Router
- 🎭 **Smooth Animations**: Elegant transitions using Framer Motion
- 📱 **PWA Ready**: Configured to work as a Progressive Web App
- 🔧 **TypeScript**: Type safety across the project
- 🎯 **SEO Optimized**: Meta tags and structure optimized for SEO

## 🛠️ Technologies Used

- **Framework**: Next.js 15.4.4
- **React**: 19.1.0
- **TypeScript**: Type safety
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons, Heroicons
- **Notifications**: React Hot Toast

## 📁 Project Structure

src/
├── app/ # Next.js App Router
│ ├── about/ # About page
│ ├── contact/ # Contact page
│ ├── projects/ # Projects page
│ ├── layout.tsx # Main layout
│ └── page.tsx # Home page
├── components/ # Reusable components
│ ├── layout/ # Navbar, Footer
│ ├── sections/ # Hero, ProjectCard
│ └── ui/ # Basic UI components
├── data/ # Project and skills data
├── hooks/ # Custom React hooks
├── lib/ # Utilities and configurations
├── context/ # Context providers
└── types/ # TypeScript definitions

bash
Copy code

## 🚀 How to Run

### Prerequisites
- Node.js 18+  
- npm or yarn  

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gabisinhas/my-portfolio-nextjs.git
cd my-portfolio-nextjs
Install dependencies:

bash
Copy code
npm install
Run the project in development mode:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

Available Scripts
npm run dev - Starts the development server with Turbopack

npm run build - Creates a production build

npm run start - Builds and exports the project as static files

npm run lint - Runs ESLint

📊 Pages
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

