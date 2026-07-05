import { useState } from 'react'

import './App.css'
import Rating from './components/Rating'
import List from './components/List'

function App() {


  return (
    <>
    <Rating title="Оцените доставку"/>
    <Rating title="Оценка сервиса"/>
    <List/>
    </>
  )
}

export default App
