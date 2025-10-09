import Product from './Product';

function ProductsGrid({ products }) {
  return (
    <>
      <div className='products-grid'>
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}

export default ProductsGrid;
