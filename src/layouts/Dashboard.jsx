import React from 'react'
import Navi from './Navi'
import ProductList from '../pages/ProductList'
import Categories from './Categories'

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <Categories />
      <ProductList />
    </div>
  )
}
