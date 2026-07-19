# Ranjay Prajapati - Portfolio

A modern, fully responsive personal portfolio website built with the MERN stack, showcasing projects, technical skills, education, certifications, and coding profiles. Features a clean UI, smooth animations, AI chatbot, and contact form with email notifications.

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Scripts](#-scripts)
- [Production Deployment](#-production-deployment)
- [License](#-license)

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **3D Background**: Interactive 3D background using Three.js and React Three Fiber
- **Loading Screen**: Custom animated loading screen
- **Sections**:
  - About Me with profile and stats
  - Technical Skills (marquee animation, dual-column display)
  - Projects Showcase with live links and GitHub repos
  - Certifications
  - Coding Profiles (LeetCode, GeeksforGeeks, HackerRank)
  - Education
  - Contact Form with email notifications
  - AI Chatbot (optional, uses Gemini API)
- **Contact Form**: Sends emails via SMTP and saves to MongoDB
- **Auto-Seeding**: Portfolio data is automatically seeded on first server start

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.3
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Font Awesome, React Icons
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Routing**: React Router DOM

### Backend
- **Framework**: Express.js
- **Runtime**: Node.js
- **Database**: MongoDB with Mongoose ODM
- **Email**: Nodemailer
- **AI Integration**: Google Generative AI (Gemini)
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

# Gemini AI Chatbot (optional)
GEMINI_API_KEY=your-gemini-api-key
```

### Gmail Setup Notes
To use Gmail as your SMTP provider:
1. Enable 2-Step Verification on your Google Account
2. Create an App Password at https://myaccount.google.com/apppasswords
3. Use that App Password as `SMTP_PASS`

## 📡 API Endpoints

| Method | Endpoint         | Description                                      |
|--------|------------------|--------------------------------------------------|
| GET    | `/api/health`    | Health check - confirms API is running           |
| GET    | `/api/portfolio` | Retrieve all portfolio content (profile, skills, projects, etc.) |
| POST   | `/api/contact`   | Submit contact form (saves to DB + sends email)  |
| POST   | `/api/chat`      | Send message to AI chatbot                       |

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
