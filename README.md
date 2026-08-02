# Ranjay Prajapati - Portfolio/

A modern, fully responsive personal portfolio website built with the MERN stack, showcasing projects, technical skills, education, certifications, coding profiles, services, and a contact form with email notifications.

## 📋 Table of Contents
- Features
- Tech Stack
- Project Structure
- Getting Started
- Environment Variables
- API Endpoints
- Scripts
- Production Deployment
- License

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **3D Background**: Interactive 3D background using Three.js and React Three Fiber
- **Loading Screen**: Custom animated loading screen
- **Theme Support**: Dark/Light mode toggle
- **Fast Data Rendering**: LocalStorage cache with stale-while-revalidate behavior for a snappy experience
- **Sections**:
  - About Me with profile and stats
  - Technical Skills (marquee animation, dual-column display)
  - Projects Showcase with live links and GitHub repos
  - Certifications
  - Coding Profiles (LeetCode, GeeksforGeeks, HackerRank)
  - Education
  - Services
  - Contact Form with email notifications
- **Contact Form**: Sends emails via EmailJS (optional), FormSubmit fallback, and backend API fallback
- **Auto-Seeding**: Portfolio data is automatically seeded on first server start

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.3
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Font Awesome, Lucide, React Icons
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Routing**: React Router DOM

### Backend
- **Framework**: Express.js
- **Runtime**: Node.js
- **Database**: MongoDB with Mongoose ODM
- **Email**: Nodemailer
- **CORS**: Configured for cross-origin requests

### Dev Tools
- **Concurrently**: Run client and server together
- **Git/GitHub**: Version control

## 📁 Project Structure

```
Ranjay-portfolio/
├── client/             # React + Vite Frontend
│   ├── public/         # Static assets (images, icons, resume)
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── context/    # Theme context
│   │   ├── hooks/      # Custom hooks
│   │   ├── pages/      # Page components
│   │   ├── services/   # API service
│   │   ├── App.jsx     # Main app component
│   │   └── main.jsx    # Entry point
│   └── package.json
├── server/             # Express.js Backend
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Custom middleware (error handling, async)
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── utils/          # Seed data and utilities
│   ├── .env.example    # Example environment variables
│   ├── server.js       # Server entry point
│   └── package.json
├── package.json        # Root package.json with shared scripts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB (local installation or MongoDB Atlas)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ranjay6126/Ranjay-portfolio.git
   cd Ranjay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your configuration (see below)
   ```

4. **Start development servers**
   ```bash
   # From root directory
   npm run dev
   ```
   This will start:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## 🔐 Environment Variables

Create a `server/.env` file with the following:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
CLIENT_URL=http://localhost:5173

# Email Configuration (optional but recommended for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # For Gmail, use App Password
```

Optional EmailJS variables in `client/.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📡 API Endpoints

| Method | Endpoint         | Description                                      |
|--------|------------------|--------------------------------------------------|
| GET    | `/api/health`    | Health check - confirms API is running           |
| GET    | `/api/portfolio` | Retrieve all portfolio content (profile, skills, projects, etc.) |
| POST   | `/api/contact`   | Submit contact form (saves to DB + sends email)  |

## 📜 Scripts

| Command                | Description                                      |
|------------------------|--------------------------------------------------|
| `npm run install:all`  | Install dependencies for both client and server  |
| `npm run dev`          | Start frontend and backend concurrently          |
| `npm run client`       | Start only the frontend dev server               |
| `npm run server`       | Start only the backend dev server (with watch)   |
| `npm run seed`         | Manually re-seed the database with sample data   |
| `npm run build`        | Build the frontend for production                |
| `npm start`            | Start the production backend server              |

## 🚀 Production Deployment

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Set production environment variables**
   - Set `NODE_ENV=production`
   - Update `MONGODB_URI` to use your production database
   - Update `CLIENT_URL` to your production domain

3. **Start the server**
   ```bash
   npm start
   ```

The Express server will automatically serve the built React frontend from `client/dist`.

## 📄 License

This project is for personal portfolio use.
