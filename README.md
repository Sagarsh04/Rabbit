# 🛍️ Rabbit — Full-Stack E-Commerce Platform

Rabbit is a full-stack e-commerce web application built with **React, Node.js, Express, MongoDB, and Redux Toolkit**.

The project includes a customer-facing shopping experience as well as an **admin dashboard** for managing products, users, and orders.

## ✨ Features

### 👤 User Features
- User registration and login
- JWT-based authentication
- Protected user routes
- User profile
- Product browsing
- Product details
- Collection/category pages
- Product filtering and search
- Shopping cart
- Checkout
- Order creation
- Order confirmation
- View previous orders

### 🛒 Shopping Experience
- Responsive product grid
- Product variants such as sizes and colors
- Cart drawer
- Quantity management
- Shipping address handling
- Checkout flow
- Order tracking/details

### 🔐 Admin Dashboard
- Admin-only protected routes
- Admin dashboard
- User management
- Add, update, and delete users
- Product management
- Add and edit products
- Product image upload
- Order management
- Update order status

### ⚙️ Backend
- REST API using Express.js
- MongoDB database with Mongoose
- JWT authentication
- Password hashing with bcrypt
- Authentication and authorization middleware
- Protected admin APIs
- Product, cart, checkout, and order APIs
- Cloudinary integration for image uploads

## 🧰 Tech Stack

### Frontend
- React
- Vite
- React Router
- Redux Toolkit
- React Redux
- Axios
- Tailwind CSS
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- Cloudinary

### Development Tools
- Git & GitHub
- VS Code
- Postman
- Vercel

## 📁 Project Structure

```text
Rabbit/
│
├── backend/
│   ├── config/
│   ├── data/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   │   └── slices/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── .gitignore
```

## 🔄 Application Flow

```text
React Frontend
      │
      │ Axios / REST API
      ▼
Express.js Backend
      │
      ├── Authentication & Authorization
      ├── Products
      ├── Cart
      ├── Checkout
      ├── Orders
      └── Admin APIs
      │
      ▼
MongoDB
```

Redux Toolkit is used on the frontend to manage application state and asynchronous API operations through slices and `createAsyncThunk`.

## 🔑 Authentication

Rabbit uses JWT-based authentication.

After login:

```text
User Login
    ↓
Backend validates credentials
    ↓
JWT token generated
    ↓
Frontend stores authentication information
    ↓
Token sent with protected API requests
    ↓
Backend middleware verifies the token
```

Admin routes additionally verify that the authenticated user has the required admin role.

## 🧩 Redux Architecture

The frontend uses Redux Toolkit slices to separate application state by feature.

Examples include:

- `authSlice` — authentication and user information
- `productSlice` — product data
- `cartSlice` — cart state
- `checkoutSlice` — checkout data
- `orderSlice` — user orders
- `adminSlice` — admin user management
- `adminProductSlice` — admin product management
- `adminOrderSlice` — admin order management

Async API operations are handled with Redux Toolkit's `createAsyncThunk`.

Typical flow:

```text
Component
   ↓
dispatch(thunk)
   ↓
Axios API request
   ↓
Express API
   ↓
MongoDB
   ↓
Redux state updated
   ↓
React UI re-renders
```

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Sagarsh04/Rabbit.git
cd Rabbit
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=9000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Use your actual variable names if they differ in your local backend configuration.

### 3. Start the backend

```bash
npm run dev
```

The backend should run on the configured port, for example:

```text
http://localhost:9000
```

### 4. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_BACKEND_URL=http://localhost:9000
```

### 5. Start the frontend

```bash
npm run dev
```

The Vite development server will provide the local frontend URL in the terminal.

## 🔒 Environment Variables

Do **not** commit `.env` files or secret keys to GitHub.

The repository's `.gitignore` excludes the frontend and backend `.env` files.

For production, configure environment variables in the hosting platform instead of hard-coding credentials.

## 🧪 API Areas

The backend is organized around REST API routes for:

```text
/api/users
/api/products
/api/cart
/api/checkout
/api/orders
/api/admin/users
/api/admin/products
/api/admin/orders
```

Protected endpoints use authentication middleware, while admin endpoints additionally verify admin authorization.

## 📱 Responsive UI

The frontend is built with responsive layouts using Tailwind CSS so that the shopping experience can adapt to different screen sizes.

## 🎯 What I Learned

This project helped me work with:

- React component architecture
- React Router
- Redux Toolkit and async thunks
- REST API integration with Axios
- Express.js API development
- MongoDB and Mongoose
- JWT authentication
- Role-based authorization
- Protected routes
- CRUD operations
- File/image uploads
- Checkout and order workflows
- Admin dashboard development
- Environment variables
- Git and GitHub
- Vercel deployment

## 🔮 Future Improvements

- Add automated tests
- Improve API validation and error handling
- Add pagination for large product/order lists
- Add advanced product search
- Improve production monitoring
- Further optimize frontend bundle size
- Add more payment and shipping integrations

## 👨‍💻 Author

**Sagar Sharma**

GitHub:  
https://github.com/Sagarsh04

---

⭐ If you find this project useful, feel free to explore the source code and provide feedback.
