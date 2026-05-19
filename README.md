# Task Management Web App

This is a task management app I made from scratch. I built the frontend with React and Tailwind CSS. The backend is Node.js and Express, and data is stored in MongoDB. I used JWT authentication so users stay logged in and routes stay protected.

# Project Overview

The app has two sides. The frontend is the page you see in the browser. The backend is the server that talks to the database. Admin users and normal users see different screens.

Admins can create and manage tasks. Normal users can see the tasks assigned to them and update their status. The app saves who is logged in and keeps the correct dashboard even after refresh.

# Features

The app has login and signup, separate admin and user dashboards, task creation, protected pages, and role-based access. It is also built to look okay on mobile and desktop.

# Technologies Used

React and Tailwind CSS are used for the frontend. React Router handles page navigation. Redux stores user state. Axios sends requests to the backend.

The backend uses Node.js, Express, MongoDB, and Mongoose. JWT handles authentication and bcryptjs hashes passwords.

# Folder Structure

The main folders are backend and frontend.

backend has the server file, controllers, models, routes, and helper utilities.

frontend has the React app files, components, pages, redux setup, and routes.

# Setup Steps

Inside the backend folder install dependencies with npm install. Inside the frontend folder install dependencies with npm install.

# Environment Variables

Create a .env file inside the backend folder.

Sample values:

MONGO_URL=mongodb://localhost:27017/task-management
JWT_SECRET=your_secret_key_here
PORT=3000
ADMIN_JOIN_CODE=myadmincode

The database URL tells the app where MongoDB is. The secret key signs the login token. The admin code lets a user become admin during signup.

# How to Run Frontend

Go to the frontend folder and run 'npm run dev'. Then open the address shown by Vite.

# How to Run Backend

Go to the backend folder and run 'npm run dev'. The backend will start and connect to MongoDB.

# API Overview

The backend has auth routes and task routes. Users can sign up, sign in, get profile info, and sign out. Admins have extra routes like creating tasks and listing users.

# Authentication Flow

When a user logs in, the backend checks the credentials and sends a JWT token. The frontend stores the token and uses it for protected requests. When the page reloads, the app checks the token and restores the user.

# User Roles

Admin users see the admin dashboard and can manage tasks and users. Normal users see the user dashboard and can only access their own task pages. Admin routes are blocked for normal users.

# Future Improvements

I want to add task comments, better filters, nicer design, and email verification later.

# Challenges Faced

I had to learn how JWT works and how to keep the login state after refresh. I also solved the issue of blocking admin pages for normal users.

# Learning Outcomes

I learned how to connect React with Express and MongoDB, how to protect routes, and how to keep user state across refresh.

# Deployment Notes

Build the frontend with npm run build in the frontend folder. Then deploy the backend and make sure the environment variables are set. The app needs MongoDB to run.

# Author
Adinath Borse

