// src/components/ProductRow.js




function ProductRow (props) {
  
  /*let rowStyle = {

  
  if ({props.product.inStock} === true) {
    color:black
  } else {
    color:red
  }

 }*/


  return(

    <tr /*style = {rowStyle}*/><td>{props.product.name}</td><td>{props.product.price}</td></tr>
          
  )
}

export default ProductRow;