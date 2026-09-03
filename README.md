# Ranjay Prajapati - Developer Portfolio

A production-ready full-stack portfolio application showcasing education, technical skills, projects, certifications, coding profiles, services, and contact capabilities. Built with modern technologies and containerized for AWS EC2 deployment.

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, React Three Fiber, Three.js
- **Backend:** Node.js 18+, Express.js, MongoDB, Mongoose
- **Deployment:** Docker, Docker Compose, NGINX, GitHub Actions, AWS EC2
- **Security:** Helmet.js, Rate Limiting, CORS, Input Validation, gzip Compression
- **Database:** MongoDB Atlas (Cloud)

# Ranjay Prajapati - Developer Portfolio

This is my personal developer portfolio website.

I built this project to show my skills, education, projects, certifications, coding profiles, services, and contact information.

The frontend is built with React and the backend uses Node.js and Express. MongoDB is used to store my portfolio data.

I have also added Docker, NGINX, GitHub Actions, and AWS EC2 for deployment.

---

## Features

- About me
- Education
- Technical skills
- Projects
- Certifications
- Coding profiles
- Services
- Resume
- Contact form
- MongoDB database
- Responsive design
- API for portfolio data
- Docker support
- AWS EC2 deployment
- GitHub Actions CI/CD

---

## Technologies Used

### Frontend

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- React Three Fiber

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Deployment

- Docker
- Docker Compose
- NGINX
- GitHub Actions
- Docker Hub
- AWS EC2

### Security

- Helmet.js
- CORS
- Rate Limiting
- Input Validation
- Gzip Compression

## AWS Deployment Troubleshooting

The EC2 instance must be running and reachable through its public address. For the current instance, AWS shows public IPv4 `100.24.35.189`.

1. In AWS EC2, select `Portfolio_server` and copy its current **Public IPv4 address**. Do not use the private address `10.1.0.153`.
2. Open **Security** → the attached security group → **Inbound rules** → **Edit inbound rules**.
3. Add an inbound rule with type `SSH`, protocol `TCP`, port `22`, and source `0.0.0.0/0`. GitHub-hosted runner addresses are dynamic.
4. Confirm the instance is running, has a public IPv4 address, and its subnet route table has a route to an Internet Gateway.
5. In GitHub, open **Settings** → **Secrets and variables** → **Actions** and set `EC2_HOST` to the copied public address. Set `EC2_USER` to `ubuntu` and `EC2_PORT` to `22`.
6. Confirm `EC2_SSH_KEY` contains the complete private key, including its `BEGIN` and `END` lines.
7. Push a commit to `main` and rerun the workflow. The `Check EC2 SSH connectivity` step must pass before deployment starts.

From Windows, port 22 can be tested with:

```powershell
Test-NetConnection 100.24.35.189 -Port 22
```

The result must show `TcpTestSucceeded : True`.

---
