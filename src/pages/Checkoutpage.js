import React from 'react'
import { useCart } from 'react-use-cart';

const Checkoutpage = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal, 
        totalItems
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
          <h1>Cart (totalUniqueItems {totalUniqueItems})</h1>
          <h3>Cart (totalItems {totalItems})</h3>
    
          <ul className='d-flex flex-column ' >
            {items.map((item) => (
              <li key={item.id}   >
                {item.quantity} x {item.name} {`Price:$ ${item.price * item.quantity}`}&mdash;
                <button className='btn btn-danger '
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <img src={item.image} alt="productImage" width='100px'/>
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