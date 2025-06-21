# E-commerce Platform

##  Project Overview

This project is a modern, high-performance e-commerce website. The application includes a responsive frontend built with Next.js and a backend API for managing product data.

##  Tech Stack

### Frontend
- **Next.js** (React Framework)
- **React** (UI Library)
- **CSS/Tailwind CSS** (Styling)
- **TypeScript/JavaScript** (Programming Language)

### Backend
- **Next.js API Routes** / **Node.js + Express** (Backend)
- **JSON File Storage** / **In-Memory Array** (Data Storage)

##  Features Implemented

### 🔹 Task 1 - Frontend (Product Listing Page)
-  **Product Listing Page** (`/products`)
  - Displays list of products with image, name, and price
  - Responsive design (mobile-friendly)
  - Fetches data from backend API
-  **Search functionality** 
  - Search/filter functionality
  - Single product detail page (`/products/[id]`)

### 🔹 Task 2 - Backend (Product Management API)
-  **API Endpoints**:
  - `GET /api/products` - Retrieve all products
  - `POST /api/products` - Add new product
  - `DELETE /api/products/:id` - Delete product by ID

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/spirit-bomb/geer-intern-assignment.git
cd geer-intern-assignment
```

### 2. Frontend Setup (Next.js)
```bash
cd frontend
npm install
```

## 🚀 Running the Project

### Using Next.js API Route
```bash
cd frontend
npm run dev
```
The application will be available at `http://localhost:3000`

## 📱 Pages & Routes

- `/` - Home page
- `/products` - Product listing page
- `/products/[id]` - Single product detail page (bonus feature)

## 🎨 Design Features

- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Clean and intuitive interface
- **Fast Performance** - Optimized for speed
- **Search & Filter** - Easy product discovery (bonus)

## 📝 Notes & Assumptions

### Data Storage
- Products are stored in-memory array or JSON file for simplicity
- In production, would use a proper database (MongoDB, PostgreSQL, etc.)

### Image Handling
- Product images are referenced via URLs
- In production, would implement proper image upload and storage

### Error Handling
- Basic error handling implemented
- Production version would include comprehensive error management

## 🚧 Future Enhancements

- User authentication and authorization
- Shopping cart functionality
- Payment integration
- Product categories and advanced filtering
- Product reviews and ratings
- Admin dashboard for product management
- Database integration (MongoDB/PostgreSQL)
- Image upload functionality
- SEO optimization
