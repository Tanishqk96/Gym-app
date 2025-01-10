import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
const root = reactDom.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)

