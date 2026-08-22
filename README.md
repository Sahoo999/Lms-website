# 🎓 LMS — Learning Management System

A full-stack **Learning Management System** built with React, Node.js, Express, MongoDB, Clerk, Stripe, and Cloudinary.

The platform supports both **Students and Educators**, providing an end-to-end online learning and course management experience.

---

## ✨ Features

### 👨‍🎓 Students

* Secure authentication with Clerk
* Browse and explore courses
* Preview free lectures
* Purchase courses with Stripe
* Access enrolled courses
* Watch course lectures
* Track lecture completion & progress
* Rate purchased courses

### 👨‍🏫 Educators

* Educator role-based access
* Dashboard with earnings & enrollments
* Create and manage courses
* Upload course thumbnails
* Create chapters and lectures
* Set course pricing & discounts
* View enrolled students

---

## 🛠️ Tech Stack

**Frontend**

* React.js + Vite
* Tailwind CSS
* React Router
* Axios
* Clerk

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* Clerk Authentication
* Stripe
* Cloudinary

---

## 🏗️ Architecture

```text
React + Vite
     │
     │ REST API
     ▼
Node.js + Express
     │
 ┌───┼───────────┐
 ▼   ▼           ▼
MongoDB       Cloudinary
     │
     ▼
   Stripe
     │
     ▼
 Webhooks
     │
     ▼
Enrollment + Payment Sync
```

---

## 💳 Payment Flow

```text
Student → Stripe Checkout
              ↓
        Payment Success
              ↓
       Stripe Webhook
              ↓
       Verify Payment
              ↓
        Create Enrollment
              ↓
       Course Access
```

---

## 📂 Project Structure

```text
Lms-website/
├── client/       # React + Vite frontend
└── server/       # Express + MongoDB backend
```

---

## 🚀 Getting Started

### Clone

```bash
git clone https://github.com/Sahoo999/Lms-website.git
cd Lms-website
```

### Backend

```bash
cd server
npm install
npm run server
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Create `.env` files in both `client` and `server` with the required Clerk, MongoDB, Stripe, Cloudinary, and API configuration.

---

## 🔐 Security

* Clerk authentication
* Role-based authorization
* Protected API routes
* Stripe webhook verification
* Environment-based secrets
* Server-side validation

> Never commit real `.env` files or API credentials to GitHub.

---

## 🎯 Project Highlights

This project demonstrates practical experience with:

**Full-stack development · REST APIs · Authentication · RBAC · MongoDB · Stripe Payments · Webhooks · Cloud Storage · Course Management · Progress Tracking**

---

## 👨‍💻 Author

**Debangsu Sahoo**

[GitHub](https://github.com/Sahoo999)

---

⭐ If you found this project useful, consider giving it a star.
