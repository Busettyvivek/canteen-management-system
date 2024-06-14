import React from 'react';
import styles from './Item.module.css';

const Item = ({ item, handleAddToCart }) => (
  <div className={styles.item}>
    <h2>{item.name}</h2>
    <p>Price: {item.price}/-</p>
    <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
  </div>
);

export default Item;
