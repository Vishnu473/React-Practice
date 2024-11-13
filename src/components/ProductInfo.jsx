const ProductInfo = () => {
  const product = {
    name: 'Vishnu',
    price: 1200,
    availability: 'In stock',
  };

  return (
    <div>
      <h1>Name: {product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductInfo;
