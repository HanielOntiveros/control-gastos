import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [presupuestoValido,setPresupuestoValido] = useState(false)
  const [modal, setModal] = useState(false)
  const handleNuevoGasto = () => {
    setModal(true)
    console.log('diste click para anadir un nuevo gasto');
  }
  
  return (
    <div>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      />
      {presupuestoValido && (
      <div className='nuevo-gasto'>
        <img 
          src={IconoNuevoGasto}
          alt='icono nuevo gasto'
          onClick={handleNuevoGasto}
        />
      </div>
      )}
      {modal && <Modal setModal={setModal}/>}
  </div>
  )
}

export default App
