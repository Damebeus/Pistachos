import React from 'react'
import data from '../../../data/data'
import CardInfo from '../../CardInfo/CardInfo'

function Milanesas() {

  const filtrado = data.filter(function (e) {return e.category === 'sandwich'})


  return (
    <div>
      {
        filtrado && (
          <div>
            <h1>Sandwichs</h1>
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

export default Milanesas