# MERN Image Uploader

This project is a MERN stack application for uploading images to a Node.js server and displaying them in the user interface.

## Features

- **Image Upload**: Users can upload images to the server.
- **Image Display**: Uploaded images are displayed in the UI.
- **Image Retrieval**: Users can retrieve a list of all uploaded images from the server.
- **MongoDB Integration**: Utilizes MongoDB to store image data.
- **RESTful API**: Implements RESTful API endpoints for image uploading and retrieval.

## Technologies Used

- **MongoDB**: NoSQL database for storing image data.
- **Express.js**: Node.js framework for building the backend API.
- **React.js**: JavaScript library for building the user interface.
- **Node.js**: JavaScript runtime environment for server-side code.
- **Multer**: Middleware for handling multipart/form-data (used for file uploads).
- **Mongoose**: MongoDB object modeling for Node.js.
- **Axios**: Promise-based HTTP client for making API requests.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or accessible via a remote URI.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/vishalboine/Imagify.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Imagify
    ```
3. Navigate to the Frontend directory:

    ```bash
    cd frontend
    ```
4. Navigate to the Backend directory:

    ```bash
    cd backend
    ```

5. Install dependencies in both frontend and backend directory:

    ```bash
    npm install
    ```

6. Set up MongoDB:
   
    - Install MongoDB on your machine or use a cloud MongoDB service like MongoDB Atlas.
    - Create a new MongoDB database and note its connection URI.

7. Create a `.env` file in the backend directory and add your MongoDB URI:

    ```plaintext
    MONGO_URI=your_mongodb_uri_here
    PORT=4000
    ```

### Usage

1. Start the Frontend:

    ```bash
    npm start
    ```
2. Start the Server:

    ```bash
    npm run dev
    ```

3. Open your web browser and go to `http://localhost:3000` to view the application.

4. Use the UI to upload images to the server.

5. To retrieve a list of all images from the server, you can click on All Images tab.

