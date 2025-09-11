import axios from 'axios';
import Header from '../components/Header.jsx';
import './HomePage.css';
import { useEffect, useState } from 'react';
import { formatMoney } from '../utils/money.js';

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
        <div className='products-grid'>
          {products.map((product) => {
            return (
              <div key={product.id} className='product-container'>
                <div className='product-image-container'>
                  <img className='product-image' src={product.image} />
                </div>

                <div className='product-name limit-text-to-2-lines'>
                  {product.name}
                </div>

                <div className='product-rating-container'>
                  <img
                    className='product-rating-stars'
                    src={`images/ratings/rating-${
                      product.rating.stars * 10
                    }.png`}
                  />
                  <div className='product-rating-count link-primary'>
                    {product.rating.count}
                  </div>
                </div>

                <div className='product-price'>
                  {formatMoney(product.priceCents)}
                </div>

                <div className='product-quantity-container'>
                  <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                  </select>
                </div>

                <div className='product-spacer'></div>

                <div className='added-to-cart'>
                  <img src='images/icons/checkmark.png' />
                  Added
                </div>

                <button className='add-to-cart-button button-primary'>
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default HomePage;
