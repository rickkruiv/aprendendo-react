import React from 'react'

const ConditionalRender = () => {
    const x = true

  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim...</p>}

        {x ? <p>Verdadeiro</p> : <p>Falso</p>}
    </div>
  )
}

export default ConditionalRender