import React from 'react'

import '../style/product.css'

import StarIcon from '@mui/icons-material/Star';

export default function Product() {
  return (
<div>
 <p>Top Product</p>  
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Sold Amount</th>
      <th>Unit Price</th>
      <th>Revenue</th>
      <th>Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="name">product</td>
      <td>100</td>
      <td>$10.00</td>
      <td>$1,000.00</td>
      <td><span class="star-icon"><StarIcon/></span>4.5</td>
    </tr>
    <tr>
    <td class="name">product</td>
      <td>75</td>
      <td>$20.00</td>
      <td>$1,500.00</td>
      <td><span class="star-icon"><StarIcon/></span>4.5</td>
    </tr>

    <tr>
    <td class="name">product</td>
      <td>75</td>
      <td>$20.00</td>
      <td>$1,500.00</td>
      <td><span class="star-icon"><StarIcon/></span>4.5</td>
    </tr>


  </tbody>
</table>


</div>    
  )
}
