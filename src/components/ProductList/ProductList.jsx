import React from 'react'
import Empanadas from '../Empanadas/Empanadas'
import Pizza from '../Pizza/Pizza'
import Sanguches from '../Sanguches/Sanguches'
import Destacados from '../Destacados/Destacados'
import Bebidas from '../Bebidas/Bebidas'

function ProductList() {
  return (
    <div>
        <Destacados/>
        <Pizza/>
        <Sanguches/>
        <Empanadas/>
        <Bebidas/>
    </div>
  )
}

export default ProductList