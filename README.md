# Nursery Shop Application

A modern e-commerce shopping cart application for plant nurseries, built with React, Redux Toolkit, and Vite. This project was developed as part of the **IBM Course Completion on Coursera**.

##  Project Overview

This application provides a seamless shopping experience for plant enthusiasts, featuring a dynamic product catalog, cart management, and an intuitive user interface.

##  Tech Stack

- **Frontend Framework:** React 18.2.0
- **State Management:** Redux Toolkit (@reduxjs/toolkit)
- **Build Tool:** Vite 5.2.0
- **Styling:** CSS3
- **Package Manager:** npm

### Redux Implementation

This project leverages **Redux Toolkit** for efficient state management:
- **Store Configuration:** Centralized state management using `configureStore`
- **Cart Slice:** Manages shopping cart state including add, remove, and quantity updates
- **React-Redux Integration:** Seamless integration with React components using `useSelector` and `useDispatch` hooks

## 📁 File Structure

```
e-plantShopping-main/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images and media files
│   ├── data/
│   │   └── Plants.js           # Plant product data
│   ├── AboutUs.jsx             # About Us page component
│   ├── AboutUs.css             # About Us page styles
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Main application styles
│   ├── CartItem.jsx            # Individual cart item component
│   ├── CartItem.css            # Cart item styles
│   ├── CartSlice.jsx           # Redux slice for cart management
│   ├── ProductList.jsx         # Product listing component
│   ├── ProductList.css         # Product listing styles
│   ├── ReachOut.jsx            # Contact/Reach out component
│   ├── store.js                # Redux store configuration
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── vite.config.js              # Vite configuration
├── .eslintrc.cjs               # ESLint configuration
├── .gitignore                  # Git ignore rules
├── LICENSE                      # Project license
└── README.md                    # Project documentation

```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-plantShopping-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Key Features

-  **Shopping Cart Management** - Add, remove, and update product quantities
-  **Product Catalog** - Browse various plants with detailed information
-  **Responsive Design** - Mobile-friendly interface
-  **Fast Performance** - Powered by Vite for lightning-fast development
-  **State Management** - Efficient Redux Toolkit implementation

## Course Information

This project was developed as part of the **IBM Full Stack Developer Course** on Coursera, demonstrating proficiency in:
- React component architecture
- Redux state management
- Modern JavaScript (ES6+)
- Responsive web design
- Build tools and deployment


## Acknowledgments

- IBM for the comprehensive course curriculum
- Coursera platform for hosting the learning experience
- The React and Redux communities for excellent documentation
