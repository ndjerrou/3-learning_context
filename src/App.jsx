import { useEffect, useContext } from 'react';
import ProductCreate from './components/ProductCreate.jsx';
import ProductList from './components/ProductList.jsx';
import axios from 'axios';
import ProductsContext from './contexts/products.jsx';

function App() {
  const { fetchProducts, setProducts, products, onCreate, onDelete } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('products = ', products);
  return (
    <div>
      <ProductList products={products} onDelete={onDelete} />
      <ProductCreate onCreate={onCreate} />
    </div>
  );
}
export default App;
