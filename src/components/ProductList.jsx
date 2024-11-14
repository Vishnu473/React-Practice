const ProductList = () => {
  const products = [
    { id: 1, name: 'cellphones', items: 122, price: '$137' },
    { id: 2, name: 'Laptops', items: 72, price: '$937' },
    { id: 3, name: 'HeadPhones', items: 562, price: '$97' },
  ];

  return (
    <div>
      <h3>Product List</h3>
      {products.map(({ id, name, items, price }) => (
        <ul key={id}>
          <li>Name: {name}</li>
          <li>Items: {items}</li>
          <li>Price: {price}</li>
        </ul>
      ))}
      ;
    </div>
  );
};

export default ProductList;
