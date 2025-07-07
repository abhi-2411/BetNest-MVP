# 🧠 BetNest — A Simulated Betting Fund Management Platform

**BetNest** is a full-stack MVP web application that simulates capital allocation and performance tracking for betting funds. Inspired by the idea of a decentralized betting hedge fund, 
BetNest enables **investors** to fund **skilled betters**, who simulate bets, track performance, and transparently distribute simulated profits — all overseen by an **admin**.

Built with a focus on modularity, clarity, and role-based access, BetNest integrates modern tools like **Supabase**, **React (Vite)**, and **Node.js** to offer a seamless developer and user experience.

---

## 🔧 Core Features

### 👥 Role-Based System
- **Investors**:  
  Deposit capital, view wallet balance, track investments and returns.
- **Betters**:  
  Request capital, log simulated bets (stake, odds, outcome), track ROI and win rate.
- **Admins**:  
  Approve capital allocations, log bet results, and trigger investor payouts.

### 🔗 Supabase Integration
- All backend interactions (users, bets, investments) are handled via the **Supabase JavaScript SDK**.
- Uses Supabase features like **Row-Level Security**, **instant APIs**, and **dashboard tools**.
- Simplifies access control, data flow, and scalability.

### 🔌 RESTful API Development
- Built with **Express.js** and tested using **Postman**.
- Endpoints like `/signup`, `/login`, `/capital-request`, `/bets`, `/payouts`.
- Custom headers (e.g., `role: investor`) simulate all user roles and validate permissions.

### 🖥️ Front-End Dashboards (React + Tailwind)
- Clean, role-specific UI powered by **Tailwind CSS**.
- Dynamic routing using **React Router** and custom `AuthContext`.
- Reusable components: `WalletCard`, `PerformanceGraph`, `BetForm`, `UserTable`.

### 🔐 Mock Authentication Flow
- Local development uses a **mocked auth context** to simulate login and role-switching.
- Ideal for rapid prototyping without requiring full Supabase Auth setup (yet).

### 🧩 Scalable Backend Structure
- Structured folders: `controllers/`, `routes/`, `middleware/`, `utils/`
- Role-based middleware: `isAdmin`, `isInvestor`, `isBetter`
- `.env` file secures the **Supabase Service Role Key** for backend operations

### 🧪 Manual Seeding & Debugging
- Users, investments, payouts initially seeded via **Supabase Table Editor**
- API logic tested thoroughly in **Postman** before building the frontend

---

## 💻 Tech Stack

| Layer        | Technology                              |
|--------------|------------------------------------------|
| Frontend     | React (Vite), Tailwind CSS               |
| Backend      | Node.js, Express.js                      |
| Database     | PostgreSQL (via Supabase)                |
| API Client   | Axios, Postman                           |
| Auth (Mocked)| JWT + Role-based headers                 |
| Dev Tools    | Supabase Dashboard, SQL Editor           |

---

## 🎯 Future Enhancements
- Full Supabase Auth with OAuth or magic link
- Betting performance analytics dashboard
- Notifications for capital allocation and bet results
- Investor leaderboard and better rating system
- Admin panel for payout automation and audit logs

---

## 💬 Why BetNest?

Simulated betting funds provide a unique learning and research opportunity in the world of predictive modeling, capital efficiency, and transparent reward systems. **BetNest** is an educational MVP 
that explores this idea in a modular, real-world-inspired way — ideal for students, developers, or anyone curious about decentralized fund simulations.

