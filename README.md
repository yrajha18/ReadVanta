# 📚 ReadVanta - AI-Powered Reading Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

ReadVanta is a premium web application designed to revolutionize the way we discover and engage with books. By leveraging the power of **Google Gemini AI**, ReadVanta provides instant summaries, interactive chat insights, and real-time community discussions.

---

## ✨ Key Features

- **🤖 AI Summaries**: Get 2-paragraph, engaging summaries of any book in our library instantly.
- **🔍 Smart Discovery**: Explore a curated collection of books categorized by Tech, Science, Finance, and more.
- **💬 Real-Time Book Clubs**: Join clubs and discuss your favorite reads with other users via Socket.io.
- **🧠 Ask AI Assistant**: A dedicated AI chat interface to ask questions about authors, recommendations, and literary insights.
- **✨ Premium UI/UX**: A sleek, dark-themed interface built with **TailwindCSS** and **Framer Motion** for smooth, interactive experiences.
- **📥 Book Requests**: Can't find a book? Use our interactive request section to suggest new titles.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Real-time**: Socket.io-Client
- **State Management**: React Context API

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **AI Integration**: Google Gemini API (@google/genai)
- **Authentication**: JWT & Bcrypt.js
- **Real-time**: Socket.io

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.
- A MongoDB database (Local or Atlas).
- A Google Gemini API Key.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ReadVanta.git
   cd ReadVanta
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_gemini_api_key
   ```
   Seed the database (Optional but recommended):
   ```bash
   node seed.js
   ```
   Start the backend:
   ```bash
   npm run dev
   ```

3. **Frontend Setup**:
   ```bash
   cd ../frontend/readvanta-client
   npm install
   ```
   Start the frontend:
   ```bash
   npm run dev
   ```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

Created with ❤️ by YASH RAJ
