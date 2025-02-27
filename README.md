# Chat Application

A real-time chat application built with MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO.

## Features

- Real-time messaging
- User authentication
- Profile management
- Theme customization
- Image sharing
- Online status indicators

## Tech Stack

- Frontend: React, TailwindCSS, DaisyUI
- Backend: Node.js, Express.js
- Database: MongoDB
- Real-time: Socket.IO
- File Storage: Cloudinary

## Setup Instructions

1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/chat-app.git
    ```
2. Install dependencies
    ```bash
    cd Backend
    npm install
    ```
3. Create a `.env` file in the root directory
    ```env
    PORT=5001
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```
4. Start the server
    ```bash
    cd Backend
    npm install
    npm start
    ```
5. Start the client
    ```bash
    cd Frontend
    npm install
    npm start
    ```