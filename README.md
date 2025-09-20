# 🎓 Course Selling App (Backend)

A backend application built with **Node.js, Express, and MongoDB** that allows admins to create and manage courses, and users to browse, purchase, and view their courses.  
This project demonstrates authentication, authorization, and CRUD operations using **JWT** and **Mongoose**.

---

## 📂 Project Structure

```bash
new-course-selling-app-main/
│── index.js                # Entry point of the application
│── config.js               # Configuration (JWT secret, DB URL, etc.)
│
├── db/
│   └── index.js            # MongoDB models (User, Admin, Course)
│
├── middleware/
│   ├── admin.js            # Middleware for admin authentication
│   └── user.js             # Middleware for user authentication
│
├── routes/
│   ├── admin.js            # Admin-related routes (signup, login, courses)
│   └── user.js             # User-related routes (signup, login, courses)
│
│── package.json            # Project dependencies
│── package-lock.json
│── .gitignore

---

## 🚀 Features

### 👨‍💼 Admin
- Sign up & log in  
- Create, update, and manage courses  
- View all users  

### 👤 User
- Sign up & log in  
- Browse available courses  
- Purchase courses  
- View purchased courses  

### 🔒 Authentication
- JWT-based login system  
- Middleware-protected routes  

### 🗄️ Database
- MongoDB with Mongoose schemas & models  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT  
- **Package Manager:** npm  

---


