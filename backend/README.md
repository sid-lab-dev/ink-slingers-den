# Blog Backend API

Node.js/Express backend API for the blog application with MongoDB database.

## Features

- User authentication (register, login, JWT tokens)
- Article management (CRUD operations)
- Category management
- Role-based access control (user, admin)
- Article search and filtering
- View tracking
- Featured articles

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB installed and running locally, or MongoDB Atlas account

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the values:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A secure random string for JWT signing
     - `PORT`: Server port (default: 5000)

4. Start MongoDB (if running locally):
```bash
mongod
```

5. Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Articles
- `GET /api/articles` - Get all published articles (supports pagination, category filter, search)
- `GET /api/articles/featured` - Get featured articles
- `GET /api/articles/:slug` - Get article by slug
- `POST /api/articles` - Create new article (protected)
- `PUT /api/articles/:id` - Update article (protected, author or admin only)
- `DELETE /api/articles/:id` - Delete article (protected, author or admin only)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get category by slug
- `POST /api/categories` - Create category (protected, admin only)
- `PUT /api/categories/:id` - Update category (protected, admin only)
- `DELETE /api/categories/:id` - Delete category (protected, admin only)

## Database Models

### User
- name, email, password (hashed)
- role (user/admin)
- timestamps

### Article
- title, slug, excerpt, content
- coverImage, category, tags
- author (ref: User)
- published status, views, readTime
- timestamps

### Category
- name, slug, description
- articleCount
- timestamps

## Authentication

Protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Development

Run in development mode with auto-restart:
```bash
npm run dev
```

Run in production mode:
```bash
npm start
```
