# StudySync — Online Group Study Platform

StudySync is a full-stack collaborative learning web application designed for students and study groups to share assignments, collaborate on course materials, submit work, and evaluate peers in real-time.

---

## 🌟 Key Features

- **🔐 Secure Authentication:** Seamless user sign-up and sign-in powered by Firebase Authentication (Email/Password and Google OAuth).
- **📝 Assignment Management:** Create, view, update, and delete assignments with varying difficulty levels and deadlines.
- **📤 Submission & Evaluation Workflow:** Submit assignments with preview links and provide peer reviews, grades, and personalized feedback.
- **📊 Filter & Search:** Real-time filtering and status tracking for pending and completed assignments.
- **🎨 Responsive UI & Theme Support:** Modern, accessible interface built with TailwindCSS, DaisyUI, and light/dark theme toggling.

---

## 🛠️ Tech Stack

### Frontend (`client/`)
- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS & DaisyUI
- **Icons & Animations:** React Icons, Animate.css
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Notifications:** React Toastify & SweetAlert2

### Backend (`server/`)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (MongoDB Driver)
- **Authentication & Security:** JSON Web Tokens (JWT), Cookie-Parser, CORS

---

## 📂 Repository Structure

```text
study-group/
├── client/                     # React frontend (Vite)
│   ├── src/                    # Components, pages, hooks, routes
│   ├── public/                 # Static assets
│   ├── .env.example            # Client environment template
│   └── package.json
├── server/                     # Express backend API
│   ├── index.js                # Server entry point & API routes
│   ├── .env.example            # Server environment template
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
- [Firebase Project](https://console.firebase.google.com/)

---

### 1. Setup Backend (`server/`)

1. Navigate to the server directory:
   ```bash
   cd server
   npm install
   ```
2. Create a `.env` file based on `.env.example`:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_jwt_secret_key
   PORT=5000
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The backend will start at `http://localhost:5000`.

---

### 2. Setup Frontend (`client/`)

1. In a new terminal, navigate to the client directory:
   ```bash
   cd client
   npm install
   ```
2. Create a `.env.local` file based on `.env.example`:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_APIKEY=your_firebase_api_key
   VITE_AUTHDOMAIN=your_project_id.firebaseapp.com
   VITE_PROJECTID=your_project_id
   VITE_STORAGEBUCKET=your_project_id.appspot.com
   VITE_MESSAGINGSENDERID=your_messaging_sender_id
   VITE_APPID=your_app_id
   ```
3. Start the frontend:
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:5173`.

---

## 📄 License
This project is licensed under the MIT License.
