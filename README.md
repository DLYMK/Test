# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases your skills, projects, and contact information in a clean, minimalist design.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Modern UI with smooth animations and transitions
- Dark mode support
- Skill visualization with charts
- Project showcase with cards
- Contact form
- Social media integration
- SEO optimized

## Technologies Used

- React 18+
- TypeScript
- Tailwind CSS v3
- Framer Motion for animations
- Recharts for data visualization
- Font Awesome for icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

3. Run the development server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The website will be available at http://localhost:3000

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository

2. Sign up or log in to [Vercel](https://vercel.com/)

3. Click on "New Project" and import your GitHub repository

4. Configure the project settings:
   - Framework Preset: React
   - Build Command: `npm run build` (or your package manager's equivalent)
   - Output Directory: `dist`

5. Click "Deploy" and wait for the deployment to complete

6. Once deployed, you'll get a URL for your live website

## Customization

To customize the portfolio with your own information:

1. Update the content in the components:
   - `src/components/Profile.tsx` - Update your name, title, and profile description
   - `src/components/Skills.tsx` - Modify the skill data
   - `src/components/Projects.tsx` - Update the project information
   - `src/components/Contact.tsx` - Change the contact information and social media links

2. Replace the profile image URL in `src/components/Profile.tsx`

3. Update the SEO meta tags in `index.html`

## License

This project is open source and available under the MIT License.