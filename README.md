# 🛒 ShoppyGlobe - Modern E-Commerce Application

**ShoppyGlobe** is a premium, high-performance e-commerce application built with **React**, **Redux**, and **Vite**. It features a stunning UI, seamless navigation, and robust state management to provide an exceptional shopping experience.

---

## 🚀 Key Features

### 📦 Product Management
- **Dynamic Product List:** Fetches real-time products from the [DummyJSON API](https://dummyjson.com/products) using a **custom hook** for clean, reusable data fetching.
- **Deep Search:** A Redux-powered search filter that allows users to find products instantly across the entire catalog.
- **Detailed Insights:** Dynamic routing provides each product with its own detail page, fetching specific data based on URL parameters.

### 🛒 Advanced Cart System
- **State-of-Art Redux Management:** Complete shopping cart logic handled via **Redux Toolkit**, including adding, removing, and quantity updates.
- **Smart Quantity Control:** Intuitive +/- controls with a built-in safety net that prevents product quantities from dropping below 1.
- **Persistent Storage:** Your cart survives page refreshes! Implemented **Redux-Persist** to ensure user data is never lost.

### 💳 Checkout & Ordering
- **Checkout Workflow:** A streamlined checkout form to collect user details (Address, Payment, etc.).
- **Order Tracking:** A "Your Orders" section to view history and cancel pending orders.
- **Success Feedback:** Smooth modal-based order confirmation with automatic redirection to the home page.

### 💎 Premium User Experience
- **Immersive 404 Page:** A uniquely designed "Lost" page featuring a high-quality video background, glassmorphism UI, and detailed error logging for debugging.
- **Lightning Fast Performance:** Ultra-efficient loading using **React.lazy** and **Suspense** for code splitting.
- **Visual Feedback:** Real-time **Toast Notifications** (via React-Toastify) for every action like adding to cart or placing orders.
- **Modern Styling:** Fully responsive, "mobile-first" design built with **Tailwind CSS**.
- **Custom Loaders:** Elegant loading states to keep the user engaged during data fetching.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI Library |
| **Vite** | Build Tool (Fast Refresh & Bundling) |
| **Redux Toolkit** | Global State Management |
| **React Router v7** | Navigation & Dynamic Routing |
| **Tailwind CSS** | Styling & Responsiveness |
| **Redux Persist** | Local Storage Synchronization |
| **React Toastify** | Elegant User Notifications |

---

## 🏗️ Architecture & Requirements Met

- [x] **Vite Setup:** Initialized and optimized using Vite.
- [x] **Component Hierarchy:** Clean decomposition into `Header`, `ProductList`, `ProductItem`, `Cart`, `Checkout`, etc.
- [x] **Hooks & Props:** Extensive use of `useEffect`, `useState`, and custom hooks for business logic.
- [x] **Error Handling:** Graceful handling of API failures and route mismatches.
- [x] **Lazy Loading:** All major components are lazy-loaded to minimize initial bundle size.
- [x] **Unique Keys:** Strict adherence to React best practices for list rendering.

---

## 🚦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [INSERT_REPO_LINK_HERE]
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 🔗 Repository
**GitHub Link:** [https://github.com/hrishihrishi/ShoppyGlobe](https://github.com/hrishihrishi/ShoppyGlobe)

---
*Created with ❤️ by Hrishikesh*