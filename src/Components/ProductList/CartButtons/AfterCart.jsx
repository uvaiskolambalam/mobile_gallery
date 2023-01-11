import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CartButtons.css'
import { increment,decrement } from '../../../redux/cart'
const AfterCart = ({ cartCount, productID }) => {
   // console.log(productID,'productID');
   const dispatch = useDispatch()
  return (
    <div className="after-cart">
         <button className="cart-counter-button" onClick={()=> dispatch(decrement(productID))}>
            -
         </button>
        <div className="cart-count">{ cartCount}</div>
         <button className="cart-counter-button" onClick={()=> dispatch(increment(productID))} >
            +
         </button>
      </div>
  )
}

export default AfterCart