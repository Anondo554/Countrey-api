import { useState } from 'react' 
import './App.css'
import Countries from './component/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Countries/>
    </>
  )
}

export default App
