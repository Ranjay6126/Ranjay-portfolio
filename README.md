# Ranjay Prajapati Portfolio

A responsive personal portfolio built with React, Vite, Express, and MongoDB. It presents profile information, skills, projects, certificates, coding profiles, education, services, and a contact form.

## Features

- Responsive light and dark interface with Framer Motion animations.
- Interactive Three.js background and a loading animation.
- Portfolio content served by the Express backend and stored in MongoDB.
- Automatic database seeding when the portfolio collection is empty.
- Contact form that can save messages to MongoDB and send an SMTP email notification.
- The portfolio content only appears after the backend successfully returns profile data.

## Requirements

- Node.js 18 or later
- MongoDB running locally, or a MongoDB Atlas connection string

## Install

```powershell
git clone https://github.com/Ranjay6126/Ranjay-portfolio.git
cd Ranjay-portfolio
npm.cmd run install:all
```

Create `server/.env` from `server/.env.example`, then set at least these values:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
CLIENT_URL=http://localhost:5173
```

For contact email notifications, also configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_EMAIL`.

## Run locally

From the project root, start frontend and backend together:

```powershell
npm.cmd run dev
```

The frontend runs at `http://localhost:5173` and the backend runs at `http://localhost:5000`.

To run them separately, use two terminals:

```powershell
# Project root: start the backend first
npm.cmd run server
```

```powershell
# client folder: start Vite
npm.cmd run dev
```

`npm run dev` inside `client/` starts only the frontend. Without the backend running, the site displays a connection error instead of portfolio content.

## Portfolio service routes

All backend routes use the `/portfolio-api` prefix:

- `GET /portfolio-api/status` — confirms that the portfolio backend is running.
- `GET /portfolio-api/profile` — returns all portfolio profile and section data.
- `POST /portfolio-api/messages` — submits a contact form message.
- `GET /portfolio-api/messages` — returns stored contact messages when MongoDB is available.

## Scripts

- `npm.cmd run dev` — start frontend and backend together.
- `npm.cmd run client` — start only the Vite frontend.
- `npm.cmd run server` — start only the Express backend with file watching.
- `npm.cmd run seed` — seed MongoDB with the portfolio data.
- `npm.cmd run build` — create the frontend production build.
- `npm.cmd start` — run the production Express server, which serves `client/dist`.

## Production

Build the frontend, set `NODE_ENV=production` and production environment values, then start the server:

```powershell
npm.cmd run build
npm.cmd start
```

The Express server serves the compiled frontend from `client/dist` and the portfolio service from `/portfolio-api`.

## License

Personal portfolio project.
