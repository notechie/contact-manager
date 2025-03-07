# 📞 Contact Manager App

A **Contact Manager API** built with **Node.js** and **Express.js**, using **Cloud MongoDB** for database storage and **Thunder Client** for API testing. This app allows users to **securely manage contacts** with authentication, authorization, and CRUD operations.

## 🚀 Features
- **User Authentication** (Register/Login)
- **JWT-based Authentication & Authorization**
- **Secure Password Hashing** using bcrypt
- **CRUD Operations** for Contacts (Create, Read, Update, Delete)
- **Middleware for Error Handling & Token Validation**
- **MongoDB Cloud Database Integration**
- **RESTful API Design**

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Cloud)
- **Authentication:** JWT (JSON Web Token), bcrypt
- **Middleware:** Express-Async-Handler, dotenv, cors
- **Testing Tool:** Thunder Client (VS Code Extension)

---

## 📌 Installation & Setup

### ✅ Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)

### 🔧 Steps to Install

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/contact-manager.git
   cd contact-manager
2. **Install Dependencies**
   ```sh
   npm install
3. **Set Up Environment Variables**
- Create a .env file in the root directory.
- Add the following variables:
  ```sh
  PORT=5001
  CONNECTION_STRING=your_mongodb_connection_string
  ACCESS_TOKEN_SECRET=your_secret_key
4. **Start the Server**
   ```sh
   npm start

The API will be running at http://localhost:5001
