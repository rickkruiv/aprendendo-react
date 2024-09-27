import React from 'react'
import './CarCard.css'

const CarCard = ({ img, combust, brand, portas, cambio, consum, price }) => {
  return (
    <div className='car-card'>
        <span className="combustivel">{ combust }</span>
        <img src={img} />
        <h3>{ brand }</h3>
        <div className='details'>
            <span><img src="../../public/seat-belt-svgrepo-com.svg" alt="" /> { portas } portas</span>
            <span><img src="../../public/steering-wheel-drive-svgrepo-com.svg" alt="" /> { cambio }</span>
            <span> <img src="../../public/speedometer-svgrepo-com.svg" alt="" /> { consum }Km/L</span>
        </div>

        <h2>A partir de R${ price }/Dia</h2>
        <div className="buttons">
            <button className='details-btn'>Details</button>
            <button className='book-now'>Alugar Agora</button>
        </div>
    </div>
  )
}

export default CarCard