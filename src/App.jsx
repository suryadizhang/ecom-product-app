import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList'
import cookingPanImage from './assets/cooking pan.jpg';
import blenderImage from './assets/blender.jpg';
import coffeeMakerImage from './assets/coffee maker.jpg';
import toasterImage from './assets/toaster.jpg';
import microwaveOvenImage from './assets/microwave oven.jpg';
  
function App() {
  const [products] = useState([
    { id: 1, name: 'Cooking pan', category: 'kitchen', image: cookingPanImage, description: 'A non-stick pan for cooking', price: 29.99 },
    { id: 2, name: 'Blender', category: 'kitchen', image: blenderImage, description: 'A powerful blender for smoothies', price: 49.99 },
    { id: 3, name: 'Coffee maker', category: 'kitchen', image: coffeeMakerImage, description: 'A coffee maker for brewing coffee', price: 79.99 },
    { id: 4, name: 'Toaster', category: 'kitchen', image: toasterImage, description: 'A toaster for making toast', price: 19.99 },
    { id: 5, name: 'Microwave oven', category: 'kitchen', image: microwaveOvenImage, description: 'A microwave oven for heating food', price: 99.99 },
  ]);

    
  return (
    <div className="app-container">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;