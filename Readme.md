# Battery Management System (BMS) Service Portal

This project consists of both backend and frontend components for a Battery Management System (BMS) Service Portal.

## Backend

The backend directory (`backend-server`) contains the server-side code written in Node.js. It includes the following files:

- **.gitignore**: Specifies intentionally untracked files to ignore.
- **package.json**: Lists the project's dependencies and other metadata.
- **server.js**: Main server file that initializes and configures the Express.js server.

### Usage

To run the backend server:

1. Navigate to the backend directory:

   ```bash
   cd backend-server
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    npm start
    ```

## Frontend
The frontend directory contains the client-side code for the BMS Service Portal. It has the following structure:

frontend/
├── css/
│   └── styles.css
├── js/
│   ├── login.js
│   ├── register.js
│   └── script.js
└── pages/
    ├── battery_status.html
    ├── home.html
    ├── login.html
    └── register.html
Usage
To run the frontend locally:

Open the index.html file located in the frontend directory in your web browser.


## Features
### Backend:
Provides API endpoints for user authentication and battery status retrieval.
Utilizes Express.js framework for routing and middleware.
### Frontend:
Includes pages for user authentication (login, registration) and battery status display.
Written in HTML, CSS, and JavaScript.
Uses Bootstrap for styling and responsiveness.