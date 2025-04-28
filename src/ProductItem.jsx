function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}   

export default ProductItem;