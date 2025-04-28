import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div className="product-list">
        <h1>Product List</h1>
        {products.map((product) => (
            <ProductItem key={product.id} product={product} />
            ))}
    </div>
  );
}``

export default ProductList;