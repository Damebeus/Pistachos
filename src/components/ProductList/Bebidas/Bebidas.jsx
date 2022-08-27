import React from 'react'
import data from '../../../data/data'
import CardInfo from '../../CardInfo/CardInfo'
function Bebidas() {
  
  const filtrado = data.filter(function (a) { return a.category === 'Bebidas'})
  

  const addToCart = () =>{}

  return (
    <div>
      {
        filtrado && (
          <div>
            <h1>Bebidas</h1>
            <div>
              {
                filtrado.map(function (item){
                  return (
                    <div key={item.id}>
                      <CardInfo
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        item={item}
                        addToCart={addToCart}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Bebidas