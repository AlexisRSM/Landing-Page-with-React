import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './modules/Narbar'
import Jumbotron from './modules/Jumbotron'
import Card from './modules/Card'
import Footer from './modules/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Jumbotron></Jumbotron>
      </div>
      <div>
        <Card></Card>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>

  )
}

export default App
