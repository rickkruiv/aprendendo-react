import { useState } from 'react'
import './App.css'
import frota from './assets/all-cars.png'
import AboutUs from './components/AboutUs'
import CarCard from './components/CarCard'
import ForCustumer from './components/ForCustumer'

function App() {
  const [count, setCount] = useState(0)

  const carDetails = [
    {
      id: 1,
      brand: "Mitsubishi",
      combust: "Gasolina",
      cambio: "Manual",
      portas: 4,
      consum: 20,
      price: 300,
      img: '../public/outlancer.webp'
    },
    {
      id: 2,
      brand: "Mitsubishi",
      combust: "GNV",
      cambio: "Manual",
      portas: 4,
      consum: 20,
      price: 500,
      img: '../public/outlancer-vermelho.webp'
    },
    {
      id: 3,
      brand: "Jeep",
      combust: "Diesel",
      cambio: "Manual",
      portas: 4,
      consum: 20,
      price: 250,
      img: '../public/jeep-canada.webp'
    },
    {
      id: 4,
      brand: "Toyota",
      combust: "Diesel",
      cambio: "Manual",
      portas: 4,
      consum: 18,
      price: 350,
      img: '../public/toyota-land-cruiser.webp'
    },
    {
      id: 5,
      brand: "Ford",
      combust: "Gasolina",
      cambio: "Automático",
      portas: 4,
      consum: 16,
      price: 400,
      img: '../public/ford-bronco.webp'
    },
    {
      id: 6,
      brand: "Land Rover",
      combust: "Diesel",
      cambio: "Automático",
      portas: 4,
      consum: 14,
      price: 600,
      img: '../public/land-rover-defender.webp'
    },
    {
      id: 7,
      brand: "Jeep",
      combust: "Gasolina",
      cambio: "Manual",
      portas: 4,
      consum: 12,
      price: 450,
      img: '../public/jeep-wrangler.webp'
    },
    {
      id: 8,
      brand: "Mercedes-Benz",
      combust: "Diesel",
      cambio: "Automático",
      portas: 4,
      consum: 15,
      price: 700,
      img: '../public/mercedes-g-class.webp'
    },
    {
      id: 9,
      brand: "Suzuki",
      combust: "Gasolina",
      cambio: "Manual",
      portas: 2,
      consum: 20,
      price: 320,
      img: '../public/suzuki-jimny.webp'
    }
  ];
  

  return (
    <>
      <h2 style={{color: "#Ff0000", fontSize: "1rem"}}>Alugamos Máquinas Poderosas Também</h2>
      <p>Sed volutpat sed nunc vel porttitor. Fusce placerat aliquam dolor non prefium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere</p>
      <h1>CARROS OFF ROAD</h1>
      <img src={frota} alt="" />

      <AboutUs />

      <div className="car-cards">

        {carDetails.map((car) => (
          <CarCard key={car.id} img={car.img} brand={car.brand} combust={car.combust} cambio={car.cambio} portas={car.portas} consum={car.consum} price={car.price}/>
        ))}

      </div>


      <ForCustumer />
    </>
  )
}

export default App
