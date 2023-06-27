import React, { useContext, useState } from 'react'
import '@styles/Header.scss'
import Menu from '@components/Menu'
import AppContext from '../context/AppContext'
import MyOrder from '../containers/MyOrder'

import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrder, setToggleOrder] = useState(false)

  const { state } = useContext(AppContext)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const routesNav = [
    { href: '/', route: 'All' },
    { href: '/', route: 'Clothes' },
    { href: '/', route: 'Electronics' },
    { href: '/', route: 'Furnitures' },
    { href: '/', route: 'Toys' },
    { href: '/', route: 'Others' },
  ]

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          {routesNav.map((itemRoute, index) => (
            <li key={`${index}-${itemRoute.route.toLowerCase()}`}>
              <a href={itemRoute.href}>{itemRoute.route}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrder(!toggleOrder)}>
            <img src={shoppingCart} alt="shopping cart" />
            {state?.cart.length > 0 ? <div>{state?.cart.length}</div> : ''}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrder && <MyOrder />}
    </nav>
  )
}

export default Header
