function ProductShow({ title, desc, price }) {
  return (
    <div>
      <h4>
        {title} - {price} €
      </h4>
      <p>{desc}</p>
    </div>
  );
}

export default ProductShow;
