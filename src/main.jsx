import React from 'react'
import ReactDOM from 'react-dom/client' 
import App, { Fatna ,Rita} from './App.jsx'// here App is the same APP the same with <App /> I can change the name APP by anything 
// since I use default it means it is the main one in the file 

import  {Silk} from './2nd.jsx' // if we don't use default we are obliged ti use {}

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
    <Fatna />
    <Rita />
    <Silk />
  </React.StrictMode>
)
