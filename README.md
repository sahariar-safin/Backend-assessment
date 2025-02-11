# Book Management API

A RESTful API for managing a book collection built with Node.js, Express, and MongoDB.

## Features

- CRUD operations for books
- JWT Authentication
- Input validation
- Swagger API documentation
- MongoDB database with Prisma ORM
- Error handling

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd book-management-api
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
PORT=3000
NODE_ENV=development
DATABASE_URL="mongodb://localhost:27017/bookmanagement"
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h
```

5. Generate Prisma client:
```bash
npx prisma generate
```

6. Push the database schema:
```bash
npx prisma db push
```

## Running the Server

### Development mode
```bash
npm run dev
```

### Production mode
```bash
npm start
```

The server will start on `http://localhost:3000` (or the PORT specified in your .env file)

## API Documentation

Once the server is running, you can access the Swagger documentation at:
```
http://localhost:3000/api-docs
```

## API Endpoints

All endpoints require JWT authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Books

- `POST /api/books` - Create a new book
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a specific book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book


## License

This project is licensed under the MIT License - see the LICENSE file for details # Backend-assessment
# Backend-assessment
