import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget.jsx'
//install bootstrap npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"


function App() {
  const [count, setCount] = useState(0);
  const comprar = () => console.log("Comprar")
  const agregar = () => console.log("Agregar")

  return (

    <div>
      <Navbar />
      <ItemListContainer greeting="Descubra los destacados del mes" />
      <CartWidget itemName={"Cuadro Moderno"} itemDesc={"Realizados en madera ligera, listos para colgar."} />
      <div className="container">
        <Button onClick={comprar} size="lg" variant="warning">Comprar</Button>
        <Button onClick={agregar} size="lg" variant="warning">Agregar al carrito</Button>
      </div>
    </div>
  )
}


export default App
