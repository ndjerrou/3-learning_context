import { createContext } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export const Provider = ({ children }) => {
  const fetchProducts = async () =>
    await axios('http://localhost:2000/products');

  const valueToShare = {
    fetchProducts,
  };

  return (
    <ProductsContext.Provider value={valueToShare}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
