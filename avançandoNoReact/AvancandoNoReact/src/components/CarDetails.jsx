import React from 'react'

const CarDetails = ({ brand, year, model, km, desc }) => {
  return (
    <div className='modelo'>
      <h2>{brand} {model}</h2>
      <p><strong>Descrição:</strong> {desc}</p>
      <ul>
        <li><strong>Ano:</strong> {year}</li>
        <li><strong>Quilometragem:</strong> {km}</li>
      </ul>
    </div>
  )
}

export default CarDetails