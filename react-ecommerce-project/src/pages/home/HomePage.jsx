import axios from 'axios';
import Header from '../../components/Header.jsx';
import './HomePage.css';
import { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid.jsx';

function HomePage({ cart }) {
  /* fetch('http://localhost:3000/api/products')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
  }); 
  //this is a promise, which is an async operation which means it will take some time to complete
  //we use .then to wait for the promise to complete and then we can use the data
  //we can also use async/await to make the code more readable
  */

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  //axios is a cleaner way to get data from a backend

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className='home-page'>
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
export default HomePage;
