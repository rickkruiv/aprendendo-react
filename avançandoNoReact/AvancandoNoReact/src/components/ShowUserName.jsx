import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h2>O nome do proprietário é: {props.name}</h2>
    </div>
  )
}

export default ShowUserName