import React from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import styles from './Cart.module.css';

const Cart = ({ cart, totalAmount, handleBookOrder, setDeliveryTime }) => (
  <div className={styles.cart}>
    <h2>Pre-order Cart</h2>
    {cart.length === 0 ? (
      <p>No items in the cart.</p>
    ) : (
      <>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price.toFixed(2)}\-
            </li>
          ))}
        </ul>
        <p>Total Amount: {totalAmount.toFixed(2)}\-</p>
        <div className={styles.datetimePicker}>
          <label>Select Delivery Time:</label>
          <Datetime onChange={setDeliveryTime} />
        </div>
        <button onClick={handleBookOrder} className={styles.bookOrderButton}>Book Order</button>
      </>
    )}
  </div>
);

export default Cart;
