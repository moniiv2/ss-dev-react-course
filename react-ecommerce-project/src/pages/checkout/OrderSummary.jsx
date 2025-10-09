import dayjs from 'dayjs';
import DeliveryOptions from './deliveryOptions';
import CartItemDetails from './CartItemDetails';

function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <>
      <div className='order-summary'>
        {deliveryOptions.length &&
          cart.map((cartItem) => {
            const selectedDeliveryOption = deliveryOptions.find(
              (deliveryOption) => {
                return deliveryOption.id === cartItem.deliveryOptionId;
              }
            );
            return (
              <div key={cartItem.productId} className='cart-item-container'>
                <div className='delivery-date'>
                  Delivery date:
                  {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMS).format(
                    ' dddd, MMMM D'
                  )}
                </div>

                <div className='cart-item-details-grid'>
                  <CartItemDetails cartItem={cartItem} />

                  <DeliveryOptions
                    cartItem={cartItem}
                    deliveryOptions={deliveryOptions}
                    loadCart={loadCart}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default OrderSummary;
