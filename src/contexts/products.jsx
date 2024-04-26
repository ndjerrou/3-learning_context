import { createContext, useState } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () =>
    axios('http://localhost:2000/products')
      .then(({ data: response }) => setProducts(response.data))
      .catch(err => console.log(err.message));

  const createProduct = newProduct => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = async id => {
    const originalProducts = [...products];

    const filteredProducts = products.filter(product => product.id !== id);

    setProducts(filteredProducts);

    // optimistic
    try {
      await axios.delete(`http://localhost:2000/products/${id}`);
    } catch (err) {
      setProducts(originalProducts);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        fetchProducts,
        products,
        setProducts,
        createProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
