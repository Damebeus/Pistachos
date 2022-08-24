import React from 'react'
import Destacados from '../Destacados/Destacados'
import Empanadas from './Empanadas/Empanadas'
import Pizza from './Pizza/Pizza'
import Sanguches from './Sanguches/Sanguches'
import Bebidas from './Bebidas/Bebidas'

function ProductList() {
  return (
    <div>
      <Destacados />
      <Pizza/>
      <Empanadas />
      <Sanguches/>
      <Bebidas/>
    </div>
  )
}

export default ProductList