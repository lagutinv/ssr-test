import React from 'react'
import { render } from 'react-dom'
import App from './App'
import getDishes from './dishes'

getDishes().then(dishes => {
  render(<App dishes={dishes} />, document.getElementById('root'))
})

// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
