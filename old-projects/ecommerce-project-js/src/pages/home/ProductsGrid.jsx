import Product from './Product';

function ProductsGrid({ products, loadCart }) {
  return (
    <>
      <div className='products-grid'>
        {products.map((product) => {
          return (
            <Product product={product} key={product.id} loadCart={loadCart} />
          );
        })}
      </div>
    </>
  );
}

export default ProductsGrid;
