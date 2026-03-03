# SaaS Project Frontend

A modern, responsive, and feature-rich SaaS frontend built with React 19, Vite, and Tailwind CSS 4.

## 🚀 Features

- **Authentication:** Login and Registration pages with JWT-based session management.
- **Dashboard:** Interactive dashboard for user data and activity overview.
- **User Profile:** Manage user settings and profile information.
- **Pricing:** Dynamic pricing plans for subscription-based services.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.
- **Smooth Animations:** Integrated with Framer Motion for a premium user experience.
- **Global Notifications:** Centralized notification system using React Context.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API Client:** [Axios](https://axios-http.com/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmethamdiozen/saas-project-frontend.git
   cd saas-project-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   VITE_API_URL=http://localhost:8000/api/v1
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Building for Production

To create an optimized build:
```bash
npm run build
```

## 🌐 Deployment

### Vercel

1. Connect your GitHub repository to Vercel.
2. Add the `VITE_API_URL` environment variable in the Vercel dashboard.
3. Vercel will automatically detect Vite and deploy your application.

## 📄 License

This project is private.
