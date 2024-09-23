import './App.css'
import civico from './assets/civico.webp'

function App() {

  function handleClick() {
    const gayBTN = document.querySelector('.gay-btn');
    const randomNum = Math.floor(Math.random() * (2 - 1 + 1) + 1)
    gayBTN.textContent = "Verificando... 🤔"
    gayBTN.style.background = "#101010"

    setTimeout(() => {
      console.log(randomNum)
      if (randomNum == 1) {
        gayBTN.textContent = "Né gay não 👍"
        gayBTN.style.background = "#101010"
      } else {
        gayBTN.textContent = "Ce torra 🏳️‍🌈"
        gayBTN.style.background = "linear-gradient(red, orange, yellow, green,blue, purple)"
      }
    }, 1000)
  }

  function render(x) {
    if (x) {
      return <h2>Verdadeiro</h2>
    } else {
      return <h2>Falso</h2>
    }
  }

  return (
    <>
      <h1>Usando eventos e funções</h1>

      <button className='gay-btn' onClick={handleClick}>Clique aqui para ver se você é gay</button>

      {render(true)}
      {render(false)}

      <img src="/carro.webp" alt="alguma img" />
      <img src={civico} alt="" />
    </>
  )
}

export default App
