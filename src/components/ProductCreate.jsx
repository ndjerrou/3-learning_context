import { useForm } from 'react-hook-form';
import axios from 'axios';
function ProductCreate({ onCreate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addProduct = async data => {
    const URL = 'http://localhost:2000';

    // optimistic
    onCreate(data);

    try {
      const {
        data: { data: productAdded },
      } = await axios.post(URL + '/products', data);
    } catch (err) {
      console.log(err.message);

      onCreate();
    }
  };

  console.log(errors);

  return (
    <div className='container-md'>
      <form onSubmit={handleSubmit(addProduct)}>
        <div className='mb-3'>
          <label className='form-label'>Nom Produit</label>
          <input
            className='form-control'
            {...register('title', { required: true })}
          />
        </div>
        {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
        <div className='mb-3'>
          <label className='form-label'>Prix Produit</label>
          <input
            className='form-control'
            {...register('price', { required: true, min: 1 })}
            type='number'
          />
          {errors.price && (
            <p className='alert alert-danger'>
              Price is required and must be greater than 0
            </p>
          )}
        </div>
        <div>
          <label className='form-label'>Desc Produit</label>
          <input className='form-control' {...register('desc')} />
        </div>
        <div className='mt-3'>
          <button className='btn btn-primary '>Add a product</button>
        </div>
      </form>
    </div>
  );
}

export default ProductCreate;
