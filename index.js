import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './src/App'
import getDishes from './src/dishes'
import express from 'express'
const functions = require('firebase-functions')


const app = express()

app.get('**', (req, res) => {
  getDishes().then(dishes => {
    const html = renderToString(<App dishes={dishes} />)
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
    res.send(html)
  })
})

export let ssr = functions.https.onRequest(app)