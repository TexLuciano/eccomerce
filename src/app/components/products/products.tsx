import React from 'react'
import { Product } from './product/product'
import './style.scss'

export const Products = () => {
  return (
    <div className='products-container'>
      <div className='sec-heading'></div>
      <div className='products'>
        <Product/>
      </div>
    </div>
  )
}

