# KEVIONICS — Introductory Website

A modern introductory website for **KEVIONICS**, built to match the company’s high-tech, black-and-gold branding. The site includes a hero with particle effects, about section, solutions/features, contact form, and a Node API for form submission.

## Tech Stack

- **Frontend:** React 18 + TypeScript, Vite 7
- **Backend:** Node.js, Express, TypeScript (tsx for dev)

## Project Structure

```
Kevionics Home/
├── frontend/          # React + TypeScript (Vite)
│   ├── public/        # Static assets (add logo.png here for full branding)
│   └── src/
│       ├── components/ # Nav, Hero, About, Features, Contact, Footer
│       ├── App.tsx
│       └── main.tsx
├── backend/           # Express API
│   └── src/
│       └── index.ts   # Health check + POST /api/contact
└── README.md
```

## Quick Start

### 1. Logo (optional)

Place your KEVIONICS logo image as **`frontend/public/logo.png`**. If it’s missing, the hero shows a fallback “K” and ring.

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

API runs at **http://localhost:3001** (health: `GET /api/health`, contact: `POST /api/contact`).

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at **http://localhost:5173** and proxies `/api` to the backend.

### 4. Production

**Backend:**

```bash
cd backend
npm run build
npm start
```

**Frontend:**

```bash
cd frontend
npm run build
```

Serve the `frontend/dist` folder with any static host. Point the frontend’s API base URL to your deployed backend (e.g. via env) if needed.

## Features

- **Hero:** Full-height section with logo, tagline, and canvas-based gold particle background
- **About:** Company intro with hexagonal/circuit-style visual
- **Solutions:** Three solution cards (Integrated Systems, Innovation Lab, Enterprise Ready)
- **Contact:** Form that POSTs to backend `/api/contact` (name, email, message)
- **Design:** Dark theme, gold accents, Orbitron + Rajdhani fonts, responsive layout and mobile nav

## Environment

- Backend port: set `PORT` (default `3001`) if needed.
- Frontend API: dev server proxies `/api` to `http://localhost:3001`; adjust `vite.config.ts` proxy for other setups.

---

© KEVIONICS — Innovation in Technology
