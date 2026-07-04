"# Ranjay-portfolio" 

My personal developer portfolio featuring real-world projects, technical skills, education, certifications, and professional achievements. Designed with a clean UI, responsive layout, and modern web development practices using the MERN Stack and other industry-standard tools.

Ranjay Portfolio

A modern, fully responsive personal portfolio website that showcases my journey as a Full-Stack Developer. This portfolio highlights my real-world projects, technical expertise, educational background, certifications, achievements, and professional experience in software development.

Built using modern web technologies and industry best practices, the portfolio demonstrates my proficiency in the MERN Stack (MongoDB, Express.js, React.js, and Node.js) along with front-end and back-end development skills. It features a clean and intuitive user interface, optimized performance, mobile-friendly design, and seamless user experience across all devices.

Key sections include project showcases with detailed descriptions, technology stacks, live demos, GitHub repositories, technical skills, certifications, education, and contact information. The website reflects my passion for creating scalable, user-centric, and high-performance web applications while maintaining clean code architecture and modern design principles.

Features
Responsive design for desktop, tablet, and mobile devices
Interactive and user-friendly interface
Project showcase with live links and source code
Technical skills and technology stack display
Education, certifications, and achievements section
Contact form and professional profile links
Optimized performance and accessibility
Modern UI/UX design principles
Tech Stack
Frontend: React.js, HTML5, CSS3, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Version Control: Git & GitHub
Deployment: AWS

# Ranjay Prajapati Portfolio – MERN Stack

Full-stack portfolio with React frontend and Express + MongoDB backend.

## Structure

```
├── client/     # React (Vite) frontend
└── server/     # Express API (MVC) + MongoDB
```

## Quick Start

**Requirements:** Node.js 18+, MongoDB running locally

```bash
# 1. Install all dependencies
npm run install:all

# 2. Start frontend + backend together
npm run dev
```

- Frontend: http://localhost:5173
- Backend:  http://localhost:5000

Portfolio data is **auto-seeded** on first server start if the database is empty.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start client + server |
| `npm run client` | Frontend only |
| `npm run server` | Backend only |
| `npm run seed` | Re-seed database manually |
| `npm run build` | Build frontend for production |

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/portfolio` | All portfolio content |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/chat` | AI chatbot (optional) |

## Environment

Copy `server/.env.example` to `server/.env`:

```
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
CLIENT_URL=http://localhost:5173
```

Optional: add SMTP settings for email notifications and `GEMINI_API_KEY` for chatbot.

## Production

```bash
npm run build
set NODE_ENV=production
npm start
```

Server serves the built client from `client/dist`.
