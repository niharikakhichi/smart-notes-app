# Smart Notes App

A simple React-based notes application built with Vite. Supports adding, editing, deleting, and searching notes — with automatic persistence via localStorage.

# Features

— create new notes instantly
— update existing notes in place
— remove notes you no longer need
— filter notes in real time by keyword
— all notes persist automatically via localStorage; no backend needed

# Tech Stack

| Layer | Choice |
|---|---|
| UI Framework | React 19 (via Vite 8) |
| Language | JavaScript (JSX) |
| Styling | Inline CSS styles |
| Persistence | Browser localStorage |
| Build Tool | Vite 8 + Rolldown 


# Getting Started

### Prerequisites

- Node.js **20.19+ or 22.12+**
- npm

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/your-username/smart-notes-app.git
cd smart-notes-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

# Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR at localhost:5173 |
| `npm run build` | Build for production (output → `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all `.js` and `.jsx` files |

---

# Vite Configuration

Minimal config — just the React plugin:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

Vite 8 uses **Rolldown** as its bundler and **LightningCSS** for CSS transforms — both significantly faster than the previous Rollup + PostCSS setup.

---

# localStorage Persistence

Notes are saved to `localStorage` automatically on every change — no backend, no sign-in required. Data survives page refreshes and browser restarts, and is scoped to the user's browser.

To clear all saved notes, run this in the browser console:
