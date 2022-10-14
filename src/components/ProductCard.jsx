import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import blueshirt from '../blueshirt.png'
import blueshirt from '../whiteTshirt.jpg'
const ProductCard = () => {
  return (
    <div className='card-body d-flex flex-column'>
        <img src={blueshirt} alt='productImage'/>
        <div className='card-content d-flex flex-column p-2 justify-content-start'>
            <h3 className=''>Fancy Shirt</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsum molestias?</p>
            <strong>Price: $25.35</strong>
            <button className='btn btn-primary'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard