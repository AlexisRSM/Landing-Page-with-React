import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './modules/Navbar'
import Jumbotron from './modules/Jumbotron'
import  Card  from './modules/Card'
import Footer from './modules/Footer'

function App() {

function generateRandomId() {
  return Math.floor(Math.random() * 1000000);
}

let dogs = [
{
  id: generateRandomId(),
  name: "Apollo",
  age: 3,
  description: "Apollo is a sweet and playful dog who loves to run and play fetch. He is great with kids and other dogs.",
  breed: "Labrador Retriever",
  img: "https://picsum.photos/id/237/200/300"
},
{
  id: generateRandomId(),
  name: "Bella",
  age: 2,
  description: "Bella is a friendly and energetic dog who loves to play fetch and go for long walks. She is good with children and enjoys the company of other dogs.",
  breed: "Golden Retriever",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJU_aRybhiJnVUitOFKoexK89bvCy4oyB5ACTXE8zUxF8xhVM"
},
{
  id: generateRandomId(),
  name: "Charlie",
  age: 4,
  description: "Charlie is a loyal and intelligent dog who enjoys learning new tricks. He is great with families and gets along well with other pets.",
  breed: "German Shepherd",
  img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtrJKqeopZCAu2YrWfF0skPcNUB7nXsoVRGRESUVJje5tS86ig"
},
{
  id: generateRandomId(),
  name: "Baileys",
  age: 4,
  description: "Baileys is a loyal and gentle dog from the Serra de Estrela breed. He is known for his intelligence and protective nature. Baileys enjoys outdoor activities and is great with families.",
  breed: "Serra de Estrela",
  img: "./src/images/bay.jpg"
},
{
  id: generateRandomId(),
  name: "Max",
  age: 5,
  description: "Max is an energetic and friendly dog who loves to play fetch and go on long walks. He is good with children and enjoys the company of other dogs.",
  breed: "Labrador Retriever",
  img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOLhik9Wk7rCh_pBm9l3HO7vMmtgWHNk7gQoD7VvgTd07C64fK"
},
{
  id: generateRandomId(),
  name: "Luna",
  age: 3,
  description: "Luna is a playful and affectionate dog who loves to cuddle. She is great with kids and enjoys the company of other pets.",
  breed: "Golden Retriever",
  img: "https://media1.popsugar-assets.com/files/thumbor/hCjA7YwBw1JA98ovbDte0t0v6bQ=/0x144:2003x2147/fit-in/792x846/filters:format_auto():upscale()/2020/01/17/800/n/24155406/aafd0c475e21f90a2fcea5.07686078_.jpg"
},
{
  id: generateRandomId(),
  name: "Rocky",
  age: 6,
  description: "Rocky is a strong and athletic dog who enjoys outdoor activities. He is known for his loyalty and protective nature. Rocky is good with families and gets along well with other pets.",
  breed: "German Shepherd",
  img: "https://media.istockphoto.com/id/1303699714/photo/charming-worker-lies-at-home-in-living-room-and-does-his-job-creative-dog-at-remote-work.jpg?s=612x612&w=0&k=20&c=encVScMtpM1QNxge6XLCHmUM_oT7l7ddp3gOuonjbdQ="
},
{
  id: generateRandomId(),
  name: "Daisy",
  age: 1,
  description: "Daisy is a playful and friendly dog who loves to chase balls and go for walks. She is great with children and enjoys the company of other dogs.",
  breed: "Labrador Retriever",
  img: "https://i.pinimg.com/236x/f6/e0/dd/f6e0ddf18b42a749a9dff012195fa2e0.jpg"
}];

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Jumbotron></Jumbotron>
      </div>
      <div className='row my-2'>
          {
              dogs.map((dog) => {
                return <Card dog={dog} />
              })}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
