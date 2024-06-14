import React, { useState } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import itemsData from './data/itemsData';
import './App.css';  // Import any global styles

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [orderBooked, setOrderBooked] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleBookOrder = () => {
    setOrderBooked(true);
    setCart([]);  // Clear the cart after booking the order
  };

  const filteredItems = itemsData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />
      <ItemList items={filteredItems} handleAddToCart={handleAddToCart} />
      <Cart 
        cart={cart} 
        totalAmount={totalAmount} 
        handleBookOrder={handleBookOrder} 
        setDeliveryTime={setDeliveryTime}
      />
      {orderBooked && (
        <p className="order-message">
          Your order has been booked for {deliveryTime ? deliveryTime.format('MMMM Do YYYY, h:mm a') : 'your chosen time'}!
        </p>
      )}
    </div>
  );
}

export default App;
