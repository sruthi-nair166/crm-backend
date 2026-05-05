# Customer Relationship Management

## Table of contents

- [About](#about)
  - [Overview](#overview)
  - [Features](#features)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## About

<img src="./Video Recording/CRM.gif" alt="home page desktop" style="border: 1px solid grey">

### Overview

This project is a full-stack Customer Relationship Management (CRM) application built using the MERN stack. It allows users to register, log in, and manage customer data.

The backend is built using Node.js and Express, with MongoDB for persistent storage. The frontend is developed using React with Tailwind CSS for responsive UI design. The application follows a modular architecture with separate controllers, routes, and middleware.

### Features

**Authentication & Authorization** <br />

- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes for CRUD operations

**Customer Management (CRUD)** <br />

- Add new customer data
- View all customers
- Edit customer details
- Delete customers
- Only logged-in users can perform create, update, and delete actions

**Data Handling & Database** <br />

- MongoDB used for persistent storage
- Mongoose schemas and models for structured data
- Separation of authentication users and CRM customer data using flags

**Validation & Error Handling** <br />

- Backend validation for required fields
- Phone number format validation
- Proper error responses with status codes
- Frontend validation for forms

**Responsive UI** <br />

- Built using React components
- Styled using Tailwind CSS
- Mobile-friendly design
- Horizontally scrollable table for smaller screens

**Routing & Architecture** <br />

- Modular backend structure (Controllers, Routes, Middleware)
- React routing for pages (Register, Login, Dashboard)
- Clean separation of frontend and backend

**API Integration** <br />

- Axios used for frontend-backend communication
- RESTful API endpoints for all operations
- Tested using Postman

### Built With

#### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken

#### Frontend

- React.js
- Tailwind CSS
- Axios

#### Tools

- Git and GitHub
- Postman

## Author

- LinkedIn - [Sruthi V Nair](https://www.linkedin.com/in/sruthi-v-nair-5b5a09191/)
- Github - [Sruthi V Nair](https://github.com/sruthi-nair166)

## Acknowledgments

This project was built as part of an assignment in the Full Stack Development course I'm currently enrolled in, offered by Entri Elevate. Special thanks to the course instructors and materials for the guidance and support.
