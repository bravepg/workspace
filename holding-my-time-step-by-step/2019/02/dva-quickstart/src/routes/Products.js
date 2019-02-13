import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products, loading }) => {
  console.log('loading', loading)
  function handleDelete(id) {
    dispatch({
      type: 'products/deleteAfter1Second',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
// export default connect((state) => ({
//   products: state.products,
// }))(Products);
export default connect(({ products, loading }) => ({
  products,
  loading
}))(Products);