import { useContext } from 'react';
import ProductsContext from '../contexts/products';

function ProductShow() {
  const value = useContext(ProductsContext);

  console.log(value);

  return <div>ProductShow</div>;
}

export default ProductShow;
