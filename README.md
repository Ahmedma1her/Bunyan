# 🏠 Bunyan - Apartment & Home Rental Platform

Welcome to **Bunyan**, a modern full-stack web application designed to revolutionize the way people rent and buy apartments and other residential properties.

## 📋 About Bunyan

Bunyan is a comprehensive real estate platform that connects property owners, renters, and buyers in a seamless digital marketplace. Whether you're looking to rent your dream apartment, buy a new home, or manage your property listings, Bunyan provides an intuitive and secure platform to meet all your real estate needs.

### ✨ Features

- **Browse Listings**: Explore a wide variety of apartments and homes available for rent or sale
- **Property Details**: View comprehensive information including images, descriptions, location, and pricing
- **Search & Filter**: Find properties that match your specific needs and budget
- **User Accounts**: Create personalized profiles to manage your listings and favorites
- **Contact Owners**: Direct communication with property owners and agents
- **Secure Transactions**: Safe and transparent rental and purchase processes
- **Responsive Design**: Seamless experience across all devices

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 with Vite for fast development and optimized builds
- **UI Framework**: Bootstrap 5.3 for responsive design
- **Routing**: React Router v6
- **Icons**: FontAwesome
- **Styling**: CSS with responsive layouts
- **Build Tool**: Vite for rapid development and efficient production builds

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js for REST API
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Validation**: Joi for schema validation
- **Environment**: dotenv for configuration management

### Language Composition
- **JavaScript**: 82.8%
- **CSS**: 15%
- **HTML**: 2.2%

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB instance (local or cloud)

### Installation

#### Clone the Repository
```bash
git clone https://github.com/Ahmedma1her/Bunyan.git
cd Bunyan
```

#### Setup Frontend
```bash
cd FrontEnd
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

#### Setup Backend
```bash
cd BackEnd
npm install
# Configure your .env file with MongoDB connection string and JWT secret
npm start          # Start the backend server
```

## 📁 Project Structure

```
Bunyan/
├── FrontEnd/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── BackEnd/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── .env (create this file)
│   └── package.json
└── README.md
```

## 🔐 Environment Configuration

Create a `.env` file in the BackEnd directory:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## 🤝 Contributing

We welcome contributions to improve Bunyan! Please feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact & Support

For questions, feedback, or support, please reach out to the development team or open an issue on GitHub.

---

**Happy house hunting with Bunyan!** 🏠
