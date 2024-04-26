import ProductShow from './ProductShow';
function ProductList({ products, onDelete }) {
  console.log(products);

  const handleClick = id => {
    onDelete(id);
  };
  return (
    <div>
      {products.map(product => (
        <div key={product.id} className='d-flex'>
          <ProductShow {...product} />
          <button
            className='btn btn-danger'
            onClick={() => handleClick(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
