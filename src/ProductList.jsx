import ProductItem from './ProductItem';
// actually i just watch the recorded class to learn how to use this code and implement it//

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;