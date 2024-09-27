import './App.css'
import { useState } from 'react'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

const cars = [
  { 
    id: 1, 
    brand: "Kia", 
    model: "Cerato", 
    year: 2013, 
    km: 200000, 
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quam optio maxime? Nam repellat repudiandae explicabo natus, distinctio vitae vel ipsum sunt magnam repellendus ratione tempora sit beatae laborum iste?" 
  },
  { 
    id: 2, 
    brand: "Honda", 
    model: "Civic", 
    year: 2008, 
    km: 178000, 
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur ipsa ipsam distinctio sit exercitationem blanditiis ad excepturi odit temporibus cumque aut sunt adipisci, unde maxime quia libero molestias repellendus!" 
  },
  { 
    id: 2, 
    brand: "Chevrolet", 
    model: "Vectra", 
    year: 2000, 
    km: 180000, 
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis corporis nobis ullam a maiores officiis atque aliquid doloribus cupiditate beatae eveniet expedita, omnis non nisi, molestiae fugit commodi sit alias!" 

  },
  { 
    id: 2, 
    brand: "Peugeot", 
    model: "208", 
    year: 2024, 
    km: 0,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dicta architecto accusantium doloribus cum, totam doloremque officiis autem dolorum illum expedita. Saepe ut velit minus veniam ipsa doloribus voluptates at?"
  },
  { 
    id: 2, 
    brand: "Volkswagen", 
    model: "Golf", 
    year: 2020, 
    km: 78000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam dolore nisi sunt reiciendis quas ab deserunt eveniet perferendis, culpa et fugiat eligendi saepe repellendus consequuntur ex omnis odio aut."
  },
  { 
    id: 2, 
    brand: "Hyundai", 
    model: "Azera", 
    year: 2012, 
    km: 91960,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam dolore nisi sunt reiciendis quas ab deserunt eveniet perferendis, culpa et fugiat eligendi saepe repellendus consequuntur ex omnis odio aut."
  },
  { 
    id: 3, 
    brand: "Subaru", 
    model: "Legacy", 
    year: 2015, 
    km: 79000,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quibusdam similique, culpa sit ipsam dolores dolor porro sunt eaque ut a vitae, obcaecati cum sed. Numquam omnis ab id! Nobis."
  }
]

function App() {
  const [num, setNum] = useState(0);
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  function showMessage() {
    window.alert("Clicado")
  }

  return (
    <div>
      <h1>HOOKS ou HULKS? 🤔</h1>
      <button onClick={() => setNum((num) => num + 1)}>Clica ai</button>
      <p>Você clicou {num} vezes</p>

      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Henrique" />

      <div className="modelos">
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} year={car.year} model={car.model} km={car.km} desc={car.desc}/>
        ))}
      </div>

      <Fragments />

      <Container>
        <h2>Qualquer coisa</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, veniam maxime consequuntur impedit ad commodi. Tenetur, deserunt commodi. Incidunt numquam ducimus qui quod architecto repellendus, reprehenderit voluptatum a unde. Ratione.</p>
      </Container>
      <Container>
        <h2>Qualquer outra coisa</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium quasi nulla, vero iure molestiae labore dolor officia ipsa recusandae nesciunt reiciendis explicabo rem, quo expedita cupiditate commodi deleniti necessitatibus?</p>
      </Container>

      <ExecuteFunction myFunction={showMessage}/>

      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
