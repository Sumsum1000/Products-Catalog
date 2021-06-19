import './App.css';
import './Product.css';
import { useState, useEffect } from 'react';
import Product from './Product.js'

function App() {

  const [productsList, setProductsList] = useState([]);

  useEffect(async () => {
    const productsDataStr = await fetch('https://fakestoreapi.com/products');
    const productsData = await productsDataStr.json();

    setProductsList(productsData);

  }, []);


  return (
    <div className="App">
       {productsList.map(productDetails => <Product {...productDetails} />)}
    </div>
  );
}

export default App;
