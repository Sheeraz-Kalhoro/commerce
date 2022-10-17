import React from 'react'
import { useCart } from 'react-use-cart';

const Checkoutpage = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
      if (isEmpty) return <p>Your cart is empty</p>;
      const style ={
        display:'flex',
        flexDirection:'column',
        padding:'10px',
        width:'300px',
        boxShadow:'0 2.47px 4.99px 0 gainsboro'
      }
     
      return (
        <>
          <h1>Cart ({totalUniqueItems})</h1>
    
          <ul className='d-flex flex-column ' >
            {items.map((item) => (
              <li key={item.id} className='d-flex justify-content-between'>
                {item.quantity} x {item.name} &mdash;
                <button className='btn btn-danger'
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button className='btn btn-primary'
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button className='btn btn-danger' onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
        </>
  )
}

export default Checkoutpage