import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
import ReachOut from './ReachOut';

const CartItem = ({ onContinueShopping }) => {

  const [totalAmnt, setTotalAmnt] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let amnt = 0;
    cart.forEach((item) => {
      let itemAmnt = calculateTotalCost(item);
      amnt += itemAmnt;
    })
    setTotalAmnt(amnt);
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [cart]);

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleIncrement = (item) => {
    const name = item.name;
    let flag = 1;
    dispatch(updateQuantity({name, flag}));
  };

  const handleDecrement = (item) => {
    const name = item.name;
    let flag = 0;
    dispatch(updateQuantity({name, flag}));
  };

  const handleRemove = (item) => {
    const name = item.name;
    dispatch(removeItem({name}));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const amnt = Number(item.cost.replace('$','')) * item.quantity;
    return amnt;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${totalAmnt}</h2>
      <div>
        {
          cart.map((item) => {
            return(
              <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">{item.cost}</div>
                  <div className="cart-item-quantity">
                    <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                  <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckout}>Checkout</button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <ReachOut />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;


