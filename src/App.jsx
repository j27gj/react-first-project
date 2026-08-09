import { useState } from 'react'
import CardComponent from './components/card-component'
import './App.css'


  const data =  ["Gaurav Joshi", "Test 1", "Test 2","Test 3"];
  const allComp = data.map((obj,index) => {
     return <CardComponent key={index} name={obj} />
  })


function App() {
  return (
    <div style= {{display: 'flex'}}>
      {allComp}
    </div>
  )
}

export default App
