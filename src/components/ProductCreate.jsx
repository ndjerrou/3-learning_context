import { useForm } from 'react-hook-form';
import axios from 'axios';
function ProductCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addProduct = async data => {
    const URL = 'http://localhost:2000';

    const {
      data: { data: productAdded },
    } = await axios.post(URL + '/products', data);

    console.log(productAdded);

    // dealing with the response...

    // setProducts(response.data.data)
  };

  return (
    <form onSubmit={handleSubmit(addProduct)}>
      <div>
        <div>
          <label>Nom Produit</label>
          <input {...register('title', { required: true })} />
        </div>
        {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
        <div>
          <label>Prix Produit</label>
          <input {...register('price')} type='number' />
        </div>
        <div>
          <label>Desc Produit</label>
          <input {...register('desc')} />
        </div>
      </div>
      <div>
        <button>Add a product</button>
      </div>
    </form>
  );
}

export default ProductCreate;
