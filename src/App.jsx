import { useState } from 'react'
import FirstComponent from './components/FirstComponent'



function App() {
  const [count, setCount] = useState(0)
  const products=[{
    product_id:"1",
    name:"bag",
    color:["red","green"],
  },
  {
    product_id:"2",
    name:"shirt",
    color:["red","green"],
  }]

  return (
    <>
    
    <FirstComponent studentinfo={products}/>
    </>
  )
}

export default App
