# Bino – Your Next Trade 📊

Bino is a Binance-inspired cryptocurrency exchange application built as a learning project. The goal is to create a smaller version of an exchange platform, developing the frontend and foundational backend independently.

The application currently includes a landing page, user authentication flow, and a spot-markets page displaying live cryptocurrency prices from Binance.

## ✨ Features

- **Landing page** – A simple introduction to the exchange with navigation to the markets.
- **User authentication** – Login, signup, and logout navigation.
- **Spot markets** – Displays cryptocurrency trading pairs, latest prices, and 24-hour price changes.
- **Live market data** – Market prices are fetched from Binance and refreshed periodically (the current interface indicates a 2-second refresh interval).
- **Protected pages** – Authentication-aware navigation for the stocks/markets page.
- **Responsive dark UI** – A minimal dark interface with clear market information.

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 19 | Building the user interface |
| TypeScript | Static typing |
| Tailwind CSS 4 | Styling |
| React Router | Client-side routing |
| Zustand | Global client state |
| TanStack Query | Server-state management and caching |
| Axios | HTTP requests |
| Bun | Runtime, package manager, and development tooling |

### Backend

| Technology | Purpose |
|---|---|
| Bun | Runtime and development tooling |
| Express 5 | REST API |
| TypeScript | Static typing |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| JWT | Authentication |
| Bcrypt | Password hashing |
| Zod | Request/data validation |
| Cookie Parser | Cookie handling |
| CORS | Cross-origin requests |
| Resend | Email integration |

## 📁 Project Structure

```text
bino/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
├── assets/
│   ├── home-page.png
│   └── stocks-page.png
└── readme.md
```

> The `assets` directory contains the screenshots used in this README. Keep it in the repository so the images render on GitHub.

## ⚙️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed
- MongoDB connection string
- Git

### 1. Clone the repository

```bash
git clone https://github.com/partha2003-unofficial/bino.git
cd bino
```

### 2. Configure and run the backend

```bash
cd backend
bun install
```

Create a `.env` file in the `backend` directory and add the environment variables required by your backend configuration. For example:

```env
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_verified_sender_email
```

Start the backend:

```bash
bun run dev
```

### 3. Configure and run the frontend

Open a second terminal:

```bash
cd frontend
bun install
bun run dev
```

The frontend development server is configured through the Bun project scripts. Check the terminal output for the local URL.

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGODB_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign and verify JWTs |
| `NODE_ENV` | Application environment |
| `RESEND_API_KEY` | API key for Resend email integration |
| `EMAIL_FROM` | Verified sender email address |

Use the variable names expected by your actual backend configuration. Never commit `.env` files, credentials, or API keys.

## 🗺️ Roadmap

Planned areas for future development:

- Detailed cryptocurrency market pages
- Interactive price charts
- Individual trading-pair views
- Order book and recent trades
- Buy and sell order workflows
- Portfolio and wallet overview
- Trade history
- Further UI and performance improvements

## 🚧 Development Status

Bino is a work in progress. The current focus is on the frontend experience, authentication, backend foundations, and displaying cryptocurrency market data. Features in the roadmap are planned and should not be considered implemented yet.

## 🤝 Contributing

Suggestions and contributions are welcome:

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Commit your work with a descriptive message.
5. Open a pull request.

## 👨‍💻 Author

**Partha Samanta**

- GitHub: [@partha2003-unofficial](https://github.com/partha2003-unofficial)

---

If you find Bino interesting, consider giving the repository a ⭐.

**Bino – Your Next Trade.**
