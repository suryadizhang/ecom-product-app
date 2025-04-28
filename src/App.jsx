import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList'
  
function App() {
  const [products] = useState([
    { id: 1, name: 'Cooking pan', description: 'A non-stick pan for cooking', price: 29.99 },
    { id: 2, name: 'Blender', description: 'A powerful blender for smoothies', price: 49.99 },
    { id: 3, name: 'Coffee maker', description: 'A coffee maker for brewing coffee', price: 79.99 },
    { id: 4, name: 'Toaster', description: 'A toaster for making toast', price: 19.99 },
    { id: 5, name: 'Microwave oven', description: 'A microwave oven for heating food', price: 99.99 },
  ]);
    
  return (
    <>
      <ProductList products={products}/>  
    </>
  )
}

export default App
