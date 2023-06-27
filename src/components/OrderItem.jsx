import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import '@styles/OrderItem.scss'
import iconClose from '@icons/icon_close.png'

const OrderItem = ({ itemInCart }) => {
  const { removeFromCart } = useContext(AppContext)
  const handleRemove = (product) => {
    removeFromCart(product)
    console.log(product)
  }

  return (
    <div className="OrderItem">
      <figure>
        <img src={itemInCart.images[0]} alt={itemInCart.title} />
      </figure>
      <p>{itemInCart.title}</p>
      <p>{`$${itemInCart.price}`}</p>
      <img src={iconClose} alt="close" onClick={() => handleRemove(itemInCart)} />
    </div>
  )
}

export default OrderItem
