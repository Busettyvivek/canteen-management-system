import React from 'react';
import styles from './Header.module.css';

const Header = ({ searchTerm, handleSearch }) => (
  <header className={styles.header}>
    <h1>Canteen Management System</h1>
    <input
      type="text"
      placeholder="Search items..."
      value={searchTerm}
      onChange={handleSearch}
      className={styles.input}
    />
  </header>
);

export default Header;
