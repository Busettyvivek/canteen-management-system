// src/components/ItemList.js

import React from 'react';
import Item from './Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, handleAddToCart }) => {
  const categories = [...new Set(items.map(item => item.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.itemList}>
            {items.filter(item => item.category === category).map(filteredItem => (
              <Item key={filteredItem.id} item={filteredItem} handleAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
