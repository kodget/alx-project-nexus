import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory, getCategories } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        getProducts(),
        getCategories()
      ]);
      
      setProducts(productsData);
      setCategories(categoriesData);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      setLoading(true);
      const data = await getProductsByCategory(category);
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching products by category:', err);
    } finally {
      setLoading(false);
    }
  };

  const refreshProducts = () => {
    fetchData();
  };

  return {
    products,
    categories,
    loading,
    error,
    fetchProductsByCategory,
    refreshProducts
  };
};