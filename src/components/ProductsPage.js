// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar 
          filter={setProducts}
        />
        <ProductTable
          products={products}
           />
      </div>    
  )
}

export default ProductsPage;