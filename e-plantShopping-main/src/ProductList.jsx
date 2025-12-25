import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import PLants from './data/Plants.js';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './CartSlice.jsx';

function ProductList({ onHomeClick }) {

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [totalCartItems, setTotalCartItems] = useState(0);

    useEffect(() => {
        findTotalCartItems();
    }, [cartItems]);

    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page

    const plantsArray = PLants;

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    function findTotalCartItems() {
        let amnt = 0;
        cartItems.forEach((item) => {
            amnt += item.quantity;
        })
        setTotalCartItems(amnt);
        console.log(totalCartItems);
    }

    function handleAddToCart(e, name, category) {
        e.preventDefault();
        dispatch(addItem({ name, category }));
    }

    function AlreadyHumneAddkiya(name) {
        let content = "Add to Cart";
        cartItems.forEach((item) => {
            if (item.name === name) {
                content = 'Already Added';
            }
        })
        return content;
    }

    function isPlantPresent(name) {
        let flag = false;
        cartItems.forEach((item) => {
            if (item.name === name) flag = true;
        })

        return flag;
    }

    return (
        <div className="product-page">

            {/* Navbar */}
            <div className="navbar">
                <div className="nav-left">
                    <div className="luxury">
                        <img
                            className="logo-img"
                            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                            alt=""
                        />
                        <a href="/" onClick={handleHomeClick} className="tag_home_link">
                            <h3>Paradise Nursery</h3>
                            <i>Where Green Meets Serenity</i>
                        </a>
                    </div>
                </div>

                <div className="nav-right">
                    <a href="#" onClick={handlePlantsClick} className="nav-link">
                        Plants
                    </a>

                <a href="#" onClick={handleCartClick} className="cart">
                    <div className="cart-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                            <rect width="156" height="156" fill="none"></rect>
                            <circle cx="80" cy="216" r="12"></circle>
                            <circle cx="184" cy="216" r="12"></circle>
                            <path
                                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                                fill="none"
                                stroke="#faf9f9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            ></path>
                        </svg>

                        <span className="cart-count-inside">
                            {totalCartItems}
                        </span>

                    </div>
                </a>

                </div>
            </div>

            {/* Product Section */}
            {!showCart ? (
                <div className="product-grid">
                    {
                        plantsArray.map((plantModel) => {
                            return (
                                <div key={plantModel.category} className="category-section">

                                    <div className="plantname_heading">
                                        <h2 className="plant_heading">{plantModel.category}</h2>
                                    </div>

                                    <div className="product-list">
                                        {
                                            plantModel.plants.map((plant) => {
                                                return (
                                                    <div key={plant.name} className="product-card">
                                                        <img
                                                            src={plant.image}
                                                            alt={plant.name}
                                                            className="product-image"
                                                        />
                                                        <h3 className="product-title">{plant.name}</h3>
                                                        <p className="product-desc">{plant.description}</p>
                                                        <h4 className="product-price">{plant.cost}</h4>
                                                        <button
                                                            className="product-button"
                                                            disabled={isPlantPresent(plant.name)}
                                                            onClick={(e) => handleAddToCart(e, plant.name, plantModel.category)}
                                                        >
                                                            {AlreadyHumneAddkiya(plant.name)}
                                                        </button>

                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
