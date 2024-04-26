import { useEffect, useState } from 'react';
import ProductCreate from './components/ProductCreate.jsx';
import ProductList from './components/ProductList.jsx';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('http://localhost:2000/products')
      .then(({ data: response }) => setProducts(response.data))
      .catch(err => console.log(err.message));
  }, []);

  const createProduct = product => {
    setProducts(...products, product);
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
    <div>
      <ProductList products={products} onDelete={deleteProduct} />
      <ProductCreate onCreate={createProduct} />
    </div>
  );
}
export default App;
