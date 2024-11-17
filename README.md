
# Grocery Web App 🛒

This project is a **Grocery Web App** developed using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It offers a streamlined online shopping experience for users, allowing them to browse, add, and purchase grocery items with ease. The app also features a secure user authentication system and an intuitive user interface.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Styling**: CSS / TailwindCSS / Bootstrap 
- **API Testing**: Postman

## 🚀 Features

- **User Authentication**: Secure login and signup with JWT.
- **Product Listing**: Browse a variety of grocery products with details.
- **Search & Filter**: Easily search for products and apply filters.
- **Shopping Cart**: Add and manage products in a shopping cart.
- **Order Management**: Place orders and view order history.
- **Admin Panel**: Manage products, view user data, and track orders .
- **Responsive Design**: Fully responsive UI for a seamless experience across devices.

## 🗂️ Folder Structure

```
grocery-web-app/
├── client/                 # Frontend (React)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── utils/
│       └── App.js
├── server/                 # Backend (Node.js, Express.js)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .env                    # Environment variables
├── package.json
└── README.md
```

## ⚙️ Installation

### Prerequisites

- Node.js installed
- MongoDB server running locally or on the cloud (e.g., MongoDB Atlas)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/grocery-web-app.git
   cd grocery-web-app
   ```

2. **Install dependencies**:

   - For the server:
     ```bash
     cd server
     npm install
     ```

   - For the client:
     ```bash
     cd ../client
     npm install
     ```

3. **Environment Variables**:

   Create a `.env` file in the `server/` directory and add the following:
   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

4. **Start the application**:

   - Backend (server):
     ```bash
     cd server
     npm start
     ```

   - Frontend (client):
     ```bash
     cd ../client
     npm start
     ```

   The app will be running at [http://localhost:3000](http://localhost:3000).

## 🧪 API Endpoints

### User

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - User login

### Products

- **GET** `/api/products` - Get all products
- **POST** `/api/products` - Add a new product (Admin only)

### Orders

- **POST** `/api/orders` - Place a new order
- **GET** `/api/orders/:userId` - Get user orders



## 💡 Future Improvements

- Payment integration (e.g., Stripe)
- User profile with address management
- Real-time order tracking
- Enhanced search and filter functionality

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or suggestions.

## 👥 Contact

- **Developer**: [Thireesha](https://www.linkedin.com/in/thireesha-k-614b2224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- **Email**: thirisha0416@gmail.com
