import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [user, setUser] = useState(null);

  // Load cart from AsyncStorage on app start
  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        setCartItems(cart.items || []);
        setTotalPrice(cart.totalPrice || 0);
        setTotalQuantities(cart.totalQuantities || 0);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  const saveCart = async (items, price, quantities) => {
    try {
      const cartData = {
        items,
        totalPrice: price,
        totalQuantities: quantities
      };
      await AsyncStorage.setItem('cart', JSON.stringify(cartData));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  const addToCart = (product, quantity = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    
    const newTotalPrice = totalPrice + (product.price * quantity);
    const newTotalQuantities = totalQuantities + quantity;
    
    setTotalPrice(newTotalPrice);
    setTotalQuantities(newTotalQuantities);
    
    saveCart(cartItems, newTotalPrice, newTotalQuantities);
  };

  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find(item => item.id === productId);
    if (itemToRemove) {
      const updatedItems = cartItems.filter(item => item.id !== productId);
      const newTotalPrice = totalPrice - (itemToRemove.price * itemToRemove.quantity);
      const newTotalQuantities = totalQuantities - itemToRemove.quantity;
      
      setCartItems(updatedItems);
      setTotalPrice(newTotalPrice);
      setTotalQuantities(newTotalQuantities);
      
      saveCart(updatedItems, newTotalPrice, newTotalQuantities);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    AsyncStorage.removeItem('cart');
  };

  return (
    <StateContext.Provider value={{
      cartItems,
      totalPrice,
      totalQuantities,
      user,
      setUser,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within StateProvider');
  }
  return context;
};