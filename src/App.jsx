import { useState } from 'react';
import './App.css';//
import ProductList from './ProductList'; // Importing the ProductList component as per the instruction
// Importing images for products i search at google how to implement it and i found this way
import cookingPanImage from './assets/cooking pan.jpg';
import blenderImage from './assets/blender.jpg';
import coffeeMakerImage from './assets/coffee maker.jpg';
import toasterImage from './assets/toaster.jpg';
import microwaveOvenImage from './assets/microwave oven.jpg';
import hairDryerImage from './assets/hair dryer.jpg';
import electricToothbrushImage from './assets/electric toothbrush.jpg';
import shaverImage from './assets/shaver.jpg';

function App() {
  // State to manage products
  const [products] = useState([
    { id: 1, name: 'Cooking pan', category: 'Kitchen', image: cookingPanImage, description: 'A non-stick pan for cooking', price: 29.99 },
    { id: 2, name: 'Blender', category: 'Kitchen', image: blenderImage, description: 'A powerful blender for smoothies', price: 49.99 },
    { id: 3, name: 'Coffee maker', category: 'Kitchen', image: coffeeMakerImage, description: 'A coffee maker for brewing coffee', price: 79.99 },
    { id: 4, name: 'Toaster', category: 'Kitchen', image: toasterImage, description: 'A toaster for making toast', price: 19.99 },
    { id: 5, name: 'Microwave oven', category: 'Kitchen', image: microwaveOvenImage, description: 'A microwave oven for heating food', price: 99.99 },
    { id: 6, name: 'Hair dryer', category: 'Personal care', image: hairDryerImage, description: 'A hair dryer for drying hair', price: 39.99 },
    { id: 7, name: 'Electric toothbrush', category: 'Personal care', image: electricToothbrushImage, description: 'An electric toothbrush for teeth cleaning', price: 59.99 },
    { id: 8, name: 'Shaver', category: 'Personal care', image: shaverImage, description: 'A shaver for shaving', price: 29.99 },
  ]);

  // State to manage selected category and sorting//
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortByName] = useState(false);

  const filteredProducts = products.filter((product) =>
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = filteredProducts.sort((a, b) =>
    sortBy ? a.name.localeCompare(b.name) : 0
  );

  const displayedProducts = sortedProducts;

  return (
    <div className="app-container">
      <h1>Product List</h1>
      <div className="controls">
        <label>
          Filter by category:
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Personal care">Personal care</option>
          </select>
        </label>
        <label>
          <input type="checkbox" checked={sortBy} onChange={() => setSortByName(!sortBy)} /> Sort by Name
        </label>
      </div>
      <ProductList products={displayedProducts} />
    </div>
  );
}

export default App;