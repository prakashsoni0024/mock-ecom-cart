project:
  name: Mock E-Com Cart
  description: >
    A simple full-stack e-commerce cart application built for learning purposes.
    Users can browse products, add/remove items to the cart, and view cart totals.
    Built with React (frontend) and Node.js + Express (backend) with MongoDB.

features:
  - View a list of products
  - Add and remove items from the cart
  - Update quantity of items
  - View total price in the cart
  - Mock checkout (no real payments)
  - REST API integration between frontend and backend

tech_stack:
  frontend: React.js
  backend: Node.js, Express.js
  database: MongoDB
  other_tools:
    - Axios
    - Nodemon

folder_structure: |
  mock-ecom-cart/
  ├── backend/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── seed.js
  │   └── index.js
  ├── frontend/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── pages/
  │   │   ├── App.jsx
  │   │   └── main.jsx

setup_instructions:
  backend:
    - step: Navigate to backend folder
      command: cd mock-ecom-cart/backend
    - step: Install dependencies
      command: npm i
    - step: Seed the database
      command: node seed.js
    - step: Start backend server
      command: node index.js
    - note: "Server will run on http://localhost:5000"

  frontend:
    - step: Navigate to frontend folder
      command: cd mock-ecom-cart/frontend
    - step: Install dependencies
      command: npm i
    - step: Start frontend server
      command: npm run dev
    - note: "App will run on http://localhost:5173 and communicate with backend API"

usage:
  steps:
    - Open the frontend URL in your browser
    - Browse products and add items to the cart
    - Modify quantities or remove items as needed
    - Proceed to checkout to view a mock summary of your order

notes:
  - Ensure MongoDB is running before starting the backend
  - API base URL in frontend should match the backend server URL
  - No real payments are processed; this is a learning project

license: Open-source for learning purposes
