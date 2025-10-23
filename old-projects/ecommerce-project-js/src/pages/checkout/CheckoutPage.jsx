import axios from 'axios';
import './CheckoutPage.css';
import './checkout-header.css';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import OrderSummary from './OrderSummary';
import PaymentSummary from './PaymentSummary';

function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const getCheckouData = async () => {
      let response = await axios.get(
        '/api/delivery-options?expand=estimatedDeliveryTime'
      );
      setDeliveryOptions(response.data);
    };
    getCheckouData();
  }, []);

  useEffect(() => {
    const getPaymentData = async () => {
      let response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    };
    getPaymentData();
  }, [cart]);

  window.axios = axios;

  return (
    <>
      <title>Checkout</title>

      <div className='checkout-header'>
        <div className='header-content'>
          <div className='checkout-header-left-section'>
            <Link to='/'>
              <img className='logo' src='images/logo.png' />
              <img className='mobile-logo' src='images/mobile-logo.png' />
            </Link>
          </div>

          <div className='checkout-header-middle-section'>
            Checkout (
            <Link className='return-to-home-link' to='/'>
              3 items
            </Link>
            )
          </div>

          <div className='checkout-header-right-section'>
            <img src='images/icons/checkout-lock-icon.png' />
          </div>
        </div>
      </div>

      <div className='checkout-page'>
        <div className='page-title'>Review your order</div>

        <div className='checkout-grid'>
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
