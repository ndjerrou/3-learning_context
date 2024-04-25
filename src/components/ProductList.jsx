import { useContext, useEffect, useState } from 'react';

import ProductShow from './ProductShow';
import ProductsContext from '../contexts/products';
function ProductList() {
  const { fetchProducts } = useContext(ProductsContext);

  const [products, setProducts] = useState([]);

  useEffect(
    () =>
      fetchProducts().then(({ data: response }) => setProducts(response.data)),
    []
  );

  return (
    <div>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
      <ProductShow />
    </div>
  );
}

export default ProductList;
