import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CartButtons.css'
import { increment,decrement } from '../../../redux/cart'
const AfterCart = () => {
   const { cartCount } = useSelector((state) => state.cart)
   const dispatch = useDispatch()
  return (
    <div className="after-cart">
         <button className="cart-counter-button" onClick={()=> dispatch(decrement())}>
            -
         </button>
        <div className="cart-count">{ cartCount}</div>
         <button className="cart-counter-button" onClick={()=> dispatch(increment())} >
            +
         </button>
      </div>
  )
}

export default AfterCart