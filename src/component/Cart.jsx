import React from 'react'
import {useCart} from 'react-use-cart'

export const Cart = () => {
   const {productvalue} = useCart();
  
    return (
        <div>
            {console.log(productvalue)}
        </div>
    )
}
