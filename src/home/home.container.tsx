import HomeView from './home.view';
import { useState, useEffect } from 'react';
import Product from '../interface';

const Home  = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [responseError, setResponseError] = useState<boolean>(false);

  const buildProducts = () => {
    fetch('products.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
  )
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
      setProducts(data);
    })
    .catch(function () {
      setResponseError(true);
    })
  }

  const handleSearch = (value: string | null) => {
    if (!value) {
      return buildProducts();
    }

    const newProducts = products.filter(a => a.name.includes(value));
    setProducts(newProducts);
  }

  useEffect(() => {
    buildProducts();
  }, []);

  return <HomeView products={products} handleSearch={handleSearch} />;
}

export default Home;