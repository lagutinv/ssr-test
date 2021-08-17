import React from 'react'
import { render } from 'react-dom'
import App from './App'
import getDishes from './dishes'

getDishes().then(dishes => {
  render(<App dishes={dishes} />, document.getElementById('root'))
})