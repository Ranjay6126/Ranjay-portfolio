# Ranjay Prajapati — Developer Portfolio

A responsive full-stack portfolio that presents my education, technical skills, projects, certifications, coding profiles, services, and contact details. The interface is built with React, Vite, Tailwind CSS, Framer Motion, and an Express and MongoDB API provides portfolio content and contact-message handling.

## Tech stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, React Three Fiber, Three.js
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Tooling:** Nodemon and Concurrently

## Quick start

### 1. Install dependencies

```powershell
git clone https://github.com/Ranjay6126/Ranjay-portfolio.git
cd Ranjay-portfolio
npm install
npm run install:all
```

### 2. Configure environment variables

Copy `server/.env.example` to `server/.env`, then set your local values:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
CLIENT_URL=http://localhost:5173
```

Email configuration is optional. When configured, contact form submissions can also trigger an SMTP notification.

### 3. Run the app

```powershell
npm run dev
```

- Portfolio UI: `http://localhost:5173`
- Portfolio API: `http://localhost:5000`

The backend automatically seeds and synchronizes the portfolio data in MongoDB when it connects.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite frontend and nodemon backend together. |
| `npm run client` | Starts only the Vite frontend. |
| `npm run server` | Starts the backend through nodemon. |
| `npm start` | Starts the backend through nodemon. |
| `npm run seed` | Recreates portfolio data in MongoDB from the seed file. |
| `npm run build` | Creates an optimized frontend build. |

To run only the backend:

```powershell
cd server
npm start
```

Nodemon watches backend files and restarts the API automatically after changes.

## API

All API routes use the `/portfolio-api` prefix.

- `GET /portfolio-api/status` — API health check
- `GET /portfolio-api/profile` — portfolio profile and section content
- `POST /portfolio-api/messages` — submits a contact message
- `GET /portfolio-api/messages` — lists saved messages when MongoDB is connected

## Production

```powershell
npm run build
$env:NODE_ENV = "production"
npm start
```

In production, Express serves the built client from `client/dist` and continues to expose the API under `/portfolio-api`.

## License

Personal portfolio project.
