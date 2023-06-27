import React, { useState, useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import '../styles/ProductList.scss'
import axios from 'axios'
import useGetProducts from '../hooks/useGeProducts'

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
  const products = useGetProducts(API)

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((itemProduct, index) => (
          <ProductItem product={itemProduct} key={`${itemProduct.id}-${index}`} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
