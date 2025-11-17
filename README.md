
# **ShopWise – A Modern Clothing E-Commerce Platform**

ShopWise is a modern, user-friendly e-commerce platform designed to help small clothing sellers and boutique owners reach customers directly across India. The project provides a complete online shopping experience with secure authentication, product management, and a scalable frontend-backend architecture.

---

## **📌 Table of Contents**

* [Introduction](#introduction)
* [Problem Statement](#problem-statement)
* [Objectives](#objectives)
* [Folder Structure](#folder-structure)
* [System Architecture](#system-architecture)
* [Tech Stack](#tech-stack)
* [Features](#features)
* [API Overview](#api-overview)
* [Setup Instructions](#setup-instructions)
* [Environment Variables](#environment-variables)
* [Deployment](#deployment)
* [Expected Outcomes](#expected-outcomes)

---

## **📖 Introduction**

Small clothing sellers, boutique owners, and manufacturers often struggle with limited visibility and dependence on offline markets. ShopWise aims to solve this by providing a modern, responsive, and reliable e-commerce platform that allows sellers to showcase and sell apparel directly to customers across the country.

---

## **⚠️ Problem Statement**

* Lack of digital presence for many small clothing sellers
* Heavy reliance on physical stores or intermediary marketplaces
* Difficulty managing inventory, catalog, and customer reach
* No unified system for seamless buyer–seller interaction

---

## **🎯 Objectives**

* Build a complete digital storefront for clothing businesses
* Offer easy product management for sellers and admins
* Ensure secure login, signup, and role-based access
* Deliver a fast, clean, and modern shopping experience

---

## **📂 Folder Structure**

```
ShopWise/
│
├── admin/         → Admin module (future implementation)
├── backend/       → Node.js + Express API (auth implemented)
├── frontend/      → React.js client (basic UI + routes setup)
│
├── .gitignore
├── .DS_Store
└── README.md
```

---

## **🏛️ System Architecture**

**Frontend → Backend (API) → Database**

* **Frontend:** React.js, React Router
* **Backend:** Node.js + Express
* **Database:** MySQL (PlanetScale or local MySQL)
* **Authentication:** JWT (JSON Web Tokens)
* **Hosting:**

  * Frontend → Vercel
  * Backend → Render
  * Database → PlanetScale

### **High-Level Workflow**

1. User interacts with the React-based ShopWise UI
2. Frontend communicates with the backend using REST API
3. Backend handles authentication, product logic, and DB operations
4. MySQL stores user, product, and order data

---

## **🧰 Tech Stack**

### **Frontend**

* React.js
* React Router
* TailwindCSS
* Axios

### **Backend**

* Node.js
* Express.js

### **Database**

* MySQL (PlanetScale)

### **Other Tools**

* JWT for authentication
* Git + GitHub for version control
* Vercel & Render for deployment

---

## **✨ Features**

### **✔ Authentication & Authorization**

* Signup and Login
* JWT-based secure authentication
* Role-based access (Admin, Seller, Buyer)

### **✔ Product Management** *(in-progress)*

* Add new clothing products
* Update product details
* Delete product (Admin-only)
* View all products (Public)

### **✔ Admin Dashboard** *(planned)*

* Manage sellers and users
* Approve/verify seller accounts
* Monitor activity and products

### **✔ Modern Frontend Routing**

* Home Page
* Login / Signup
* Explore Products
* Product Details
* Cart
* Profile
* Admin/Seller Dashboard

---

## **🧪 API Overview (Current + Planned)**

### **Auth Routes**

| Method | Endpoint           | Description                   | Access |
| ------ | ------------------ | ----------------------------- | ------ |
| POST   | `/api/auth/signup` | Register new user/seller      | Public |
| POST   | `/api/auth/login`  | Login and receive a JWT token | Public |

### **Product Routes**

| Method | Endpoint            | Description                | Access      |
| ------ | ------------------- | -------------------------- | ----------- |
| GET    | `/api/products`     | Get all products           | Public      |
| GET    | `/api/products/:id` | Get single product details | Public      |
| POST   | `/api/products`     | Add product                | Seller only |
| PUT    | `/api/products/:id` | Update product             | Owner/Admin |
| DELETE | `/api/products/:id` | Delete product             | Admin only  |

---

## **⚙️ Setup Instructions**

### **1. Clone the Repository**

```bash
git clone https://github.com/OmvedNagre/ShopWise.git
cd ShopWise
```

---

## **🚀 Backend Setup**

```bash
cd backend
npm install
npm run dev
```

---

## **💻 Frontend Setup**

```bash
cd frontend
npm install
npm run dev
```

---

## **🔐 Environment Variables**

### **Backend `.env`**

```
JWT_SECRET=your_jwt_secret
MYSQL_HOST=your_planetscale_host
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=shopwise
```

### **Frontend `.env`**

```
VITE_BACKEND_URL=http://localhost:5000
```

---

## **🌐 Deployment**

### **Frontend (Vercel)**

* Connect `frontend` folder
* Add environment variables
* Deploy

### **Backend (Render)**

* Connect `backend` folder
* Build → `npm install`
* Start → `node server.js`
* Add environment variables
* Deploy

### **Database (MongoDB)**

* Create a no SQL database
* Copy credentials
* Add to backend `.env`

---

## **🎉 Expected Outcomes**

* A modern and functional clothing e-commerce platform
* User-friendly product management for sellers and admins
* Secure authentication and clean UI
* Strengthening small clothing businesses by giving them digital reach

---

If you want, I can also add:

✅ Screenshots
✅ Logo + banners
✅ ER diagram
✅ API documentation table
✅ Installation GIF
Just tell me!
