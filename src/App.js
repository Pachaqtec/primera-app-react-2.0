import { Component } from 'react'
import './App.css'

class Footer extends Component {
  render() {
    return (
      <>
        <h1>Footer</h1>
        <span>Fin</span>
        <h1>Footer</h1>
        <span>Fin</span>
        <h1>Footer</h1>
        <span>Fin</span>
      </>
    )
  }
}

const Body = () => {
  let nombre = 'React.js'
  return (
    <>
      <h1>Hello world {nombre}</h1>
      <div>{`Hello world ${nombre}`}</div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Body />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </div>
  )
}

export default App
