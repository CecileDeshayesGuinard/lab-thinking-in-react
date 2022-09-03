// src/components/ProductTable.js

import ProductRow from './ProductRow';

function ProductTable (props) {

  // props.products
  
  return(
      <div>
        <table>

          <thead>
            <tr><th>Name</th><th>Price</th></tr>
          </thead>
          
          <tbody>
            {/* [ <ProductRow />, <ProductRow />, <ProductRow />, ...] */}
            {props.products.map(function (product) {
                return <ProductRow product={product} />
            })}
          </tbody>
          
        </table>

      </div>    
  )
}

export default ProductTable;