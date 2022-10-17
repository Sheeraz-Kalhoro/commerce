import React from 'react'
import { useCart } from 'react-use-cart'
import ProductCard from '../components/ProductCard'
import blueshirt from '../blueshirt.png'
import blackshirt from '../pngegg.png'
import redshirt from '../pngegg(1).png'
import blackshirt2 from '../pngegg(2).png'
import blackshirts from '../pngegg(3).png'
import whiteshirt from '../whiteTshirt.jpg'

const Homepage = () => {
  const {items, addItem} = useCart()
    const style ={
      display:'flex',
      flexDirection:'column',
      padding:'10px',
      width:'300px',
      boxShadow:'0 2.47px 4.99px 0 gainsboro'
    }
  

const products = [
  {
    id: 1,
    name: "Malm",
    image:blueshirt,
    price: 990.90,
    quantity: 1
  },
  {
    id: 2,
    name: "Nordli",
    image:blackshirts,
    price: 1650.09,
    quantity: 5
  },
  {
    id: 3,
    name: "Kullen",
    image:blackshirt,
    price: 4500.05,
    quantity: 1
  },
  {
    id:4,
    name:'White T-Shirt',
    price:99.99,
    image:whiteshirt,
    quantity:50
  },
  {
    id: 5,
    name: "Malm s",
    image:redshirt,
    price: 920.30,
    quantity: 4
  },
];

return (
  <div className='d-flex  '>
    {/* {products.map((p) => (
      <div key={p.id}>
        <button onClick={() => addItem(p)}>Add to cart</button>
      </div>
    ))} */}
      {/* <ProductCard/> */}
      {products.map((p)=> <ProductCard  addItem={() => addItem(p) } key={p.id}
        name={p.name} price={p.price} image={p.image}
        />)}
    </div>
  )
}

export default Homepage