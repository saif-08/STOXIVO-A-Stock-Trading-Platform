# 📈 Stoxivo — A Stock Trading Web Application

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Full%20Stack-00C7B7?style=for-the-badge&logo=mongodb&logoColor=white" alt="MERN Stack"/>
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-Server-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
</p>

<p align="center">
  <b>🚀 A Full-Stack MERN Application | Modern UI | Secure Authentication | Interactive Data Visualization</b>
</p>

<p align="center">
  Built with React, Node.js, Express.js, and MongoDB to demonstrate full-stack web development, REST API integration, reusable components, authentication, and dynamic data-driven interfaces.
</p>

<h3 align="center">🚀 Live Application: <a href="https://stoxivo-frontend.onrender.com">visit-stoxivo</a></h3>

---


## 📌 About Stoxivo

**Stoxivo** is a stock trading platform developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It demonstrates how a modern financial application can organize its user interface, authentication, backend services, data persistence, and dashboard functionality into separate but connected application layers.

The project consists of three main parts:

- **Frontend:** The main interface for visitors and authenticated users.
- **Backend:** Handles API requests, authentication, application logic, and database operations.
- **Dashboard:** A separate interface for authorized, logged-in users to access dashboard functionality and data.

### 🔐 Access control

Stoxivo uses an authentication-based navigation flow. Users can explore the public landing page, but they must **sign up or log in before accessing the protected Products page and dashboard**.

Authentication state is shared across relevant frontend components so the interface can respond to login and logout events.

---


## 📑 Table of Contents

- [📌 About Stoxivo](#-about-stoxivo)
- [🛠️ Tech Stack](#️-tech-stack)
- [🛠️ what makes stoxivo interesting](#️interesting)
- [🎬 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [📂 Project Structure](#-project-structure)
- [🧠 What I Learned](#-what-i-learned)
- [🔮 Future Improvements](#-future-improvements)
- [⚙️ Installation and Setup](#️-installation-and-setup)
- [🔑 Environment Variables](#-environment-variables)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#Author)

---


## 🛠️ Tech Stack

### 💻 Core Technologies

- 🍃 **MongoDB** — NoSQL database for storing and managing application data.
- 🚂 **Express.js** — Backend framework for building REST APIs, handling requests, and managing middleware.
- ⚛️ **React.js** — Frontend library for building interactive interfaces with reusable components.
- 🟢 **Node.js** — JavaScript runtime for executing server-side application logic.

### 🎨 Frontend Technologies

- 🧱 **HTML5** — Structures web pages and application content.
- 🎨 **CSS3** — Styles components and creates responsive layouts.
- 🟨 **JavaScript (ES6+)** — Powers application logic, interactions, and dynamic functionality.
- 🅱️ **Bootstrap** — Provides responsive styling utilities and ready-made UI patterns.
- 🎭 **Material UI (MUI)** — Offers ready-made React components for building modern interfaces.
- ⭐ **Font Awesome** — Provides icons for navigation, buttons, and other UI elements.
- 🧭 **React Router** — Manages client-side navigation and route rendering.

### ⚙️ Backend Technologies

- 🟢 **Node.js** — Executes backend JavaScript code.
- 🚂 **Express.js** — Defines API endpoints and processes HTTP requests.
- 🍃 **MongoDB** — Persists application data in a document-oriented database.
- 🔐 **JSON Web Token (JWT)** — Supports token-based authentication.
- 🔒 **bcrypt** — Hashes passwords before they are stored.
- ⚙️ **dotenv** — Loads environment variables from configuration files.
- 🌐 **CORS** — Configures cross-origin access to backend resources.
- 📦 **body-parser** — Parses supported incoming request bodies.

---


<a id="interesting"></a>
### 💡 What makes Stoxivo interesting?

- ⚛️ **Component-driven development** using React.
- 🔗 **REST API integration** between frontend and backend.
- 🔐 **JWT-based authentication** and password hashing.
- 🗄️ **MongoDB database integration** for persistent data.
- 📊 **Interactive charts** using Chart.js.
- 🎨 **Modern UI development** using Bootstrap and Material UI.
- 🧩 **Reusable state management** using React Context.
- 🧪 **Testing fundamentals** using Jest.

> 🎯 **Project focus:** Full-stack development, authentication, API integration, reusable architecture, and interactive user interfaces.

---


## ✨ Features

| Feature | Description |
|---|---|
| 🔐 User authentication | Signup and login workflows |
| 🛡️ Protected pages | Restricts access to the Products page and dashboard to authenticated users |
| 📈 Stock trading interface | Provides the platform's stock-related user experience |
| 📊 Interactive charts | Supports vertical bar and doughnut chart visualizations |
| 🖥️ Dedicated dashboard | Separates dashboard functionality from the main frontend |
| 🌐 REST API integration | Connects frontend applications to the backend |
| 🗄️ MongoDB integration | Persists application data |
| 🔑 Password security | Uses bcrypt hashing for passwords |
| 🎟️ JWT authentication | Supports token-based identity verification |
| 🔔 Toast notifications | Displays signup and login success or error feedback |
| 🧩 Shared state | Uses React Context to share user information across components |
| 📱 Responsive UI | Uses Bootstrap and Material UI to build the interface |

---


## 📂 Project Structure

Stoxivo contains separate folders for the frontend, backend, and dashboard.

```text
Stoxivo/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── assets/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
│
├── backend/
│   ├── routes/
│   ├── Middlewares/
│   ├── models/
│   ├── controllers/
│   ├── index.js
│   ├── package.json
│   └── .env.example
│
├── dashboard/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env.example
│
├── docs/
│   └── stoxivo-demo.gif
│
├── .gitignore
└── README.md
```

---


## 🧠 What I Learned

- 🧩 **MERN Stack Development:** Connecting React, Express.js, Node.js, and MongoDB into a complete full-stack application.
- 🔐 **Authentication & Security:** Implementing JWT-based authentication and bcrypt password hashing.
- 🛡️ **Protected Routes:** Restricting access to user-facing pages and dashboard functionality.
- 🔄 **State Management:** Sharing authenticated-user information across components using React Context.
- 🌐 **REST API Integration:** Sending and handling HTTP requests using Axios.
- 🎨 **UI Development:** Building interfaces with Bootstrap, Material UI, and Font Awesome.
- 📊 **Data Visualization:** Integrating Chart.js for vertical bar and doughnut charts.
- ⚙️ **Environment Configuration:** Managing deployment settings and sensitive credentials outside source code.
- 🚀 **Deployment:** Deploying separate frontend, backend, and dashboard services using Render.
- 🐛 **Debugging & Problem-Solving:** Troubleshooting API requests, authentication, routing, and deployment issues.

---

## 🔮 Future Improvements

- 📡 **Live Market Data** — Integrate a reliable stock market data provider for live or delayed stock prices.
- 🔍 **Stock Search & Price History** — Add interactive stock search and historical price charts.
- 💼 **Portfolio Tracking** — Implement portfolio management and transaction history.
- ♿ **UI/UX Optimization** — Improve accessibility, application performance, and responsive layouts.

---


## ⚙️ Installation and Setup

### Prerequisites

Install the following before running Stoxivo locally:

- [Node.js and npm](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance
- [Visual Studio Code](https://code.visualstudio.com/) or another code editor

### 1. Clone the repository

```bash
git clone https://github.com/saif-08/STOXIVO-A-Stock-Trading-Platform
cd Stoxivo
```

### 2. Install dependencies

Open a terminal for each application.

**Frontend**

```bash
cd frontend
npm install
```

**Backend**

```bash
cd backend
npm install
```

**Dashboard**

```bash
cd dashboard
npm install
```

### 3. Configure environment variables

Create the appropriate `.env` file in each application directory using the variables expected by that application's code.

See the next section for examples.

### 4. Start the applications

Use the scripts defined in each folder's `package.json`.

For example, if the scripts use `start`:

```bash
npm start
```

Run the command from the relevant application directory. Start the backend first so the frontend and dashboard can communicate with it.

---



## 🔑 Environment Variables

Environment variables keep credentials and deployment-specific configuration out of the source code.

### Backend `.env`

Example variable names — verify them against your backend code.

```env
MONGODB_URI=your_mongodb_connection_string
TOKEN_KEY=your_strong_random_jwt secret
```

### Frontend `.env`

For Create React App:

```env
REACT_APP_BACKEND_URL=http://localhost:3002
```


### Dashboard `.env`

For Create React App:

```env
REACT_APP_BACKEND_URL=http://localhost:3002
```
---

## 🚀 Deployment

Stoxivo is deployed on [Render](https://render.com/) using separate services for the backend, frontend, and dashboard, with MongoDB Atlas providing the database.


### Deployment steps

1. Push the project to GitHub without committing secrets.
2. Create a Render Web Service for the backend.
3. Set the backend's build and start commands according to its `package.json`.
4. Add the backend environment variables in Render's service settings.
5. Configure MongoDB Atlas network access and database credentials.
6. Deploy the frontend as a Render Static Site or another suitable frontend service.
7. Deploy the dashboard separately if it is an independent application.
8. Configure each frontend with the deployed backend API URL.
9. Restrict backend CORS to the appropriate production frontend origins.
10. Configure SPA rewrite rules for client-side routes when needed.
11. Test signup, login, protected pages, dashboard access, and API requests.

---


## 🤝 Contributing

Suggestions and constructive feedback are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Test the changes locally.
5. Commit with a descriptive message.
6. Open a pull request.

```bash
git checkout -b feature/your-feature
git add .
git commit -m "feat: describe your change"
git push origin feature/your-feature
```
---


## 📄 License

This project is licensed under the  **MIT License**.

---
<a id="Author"></a>
## 👨‍💻 Author

**Techy Saifu**

*MERN Stack Developer | React.js | Node.js | Full-Stack Web Development*

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="20" height="20" alt="GitHub"/> **GitHub:** [Techy Saifu](https://github.com/saif-08)
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="20" height="20" alt="LinkedIn"/> **LinkedIn:** [Connect with me](https://www.linkedin.com/in/md-saif-242352289/)


---

<p align="center">
  <b>⭐ If you find Stoxivo interesting, consider starring the repository!</b>
</p>

<p align="center">
  Built with ❤️ using the MERN Stack.
</p>
