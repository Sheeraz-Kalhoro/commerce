import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import blueshirt from '../blueshirt.png'
import blueshirt from '../whiteTshirt.jpg'
const ProductCard = () => {
  return (
    <div className='card-body d-flex flex-column px-2 '>
        <img src={blueshirt} alt='productImage'/>
        <div className='card-content d-flex flex-column justify-content-start  py-3 px-2 '>
            <h3 className='d-flex justify-content-start'>Fancy Shirt</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing  . Voluptatibus, ipsum molestias?</p>
            <strong className='p-2'>Price: $25.35</strong>
            <button className='btn btn-primary'>Add to Cart</button>
            <p>Reviews</p>
        </div>
    </div>
  )
}

export default ProductCard