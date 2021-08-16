import React from 'react'

function App(props) {

  const dishes = props.dishes.map((dish, index) => (
    <li key={index}>{ dish.title }</li>
  ))

  return (
    <ul>
      { dishes }
    </ul>
  )
}

export default App
