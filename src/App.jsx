import { useState } from 'react'

import Header from './components/Header'
function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [presupuestoValido,setPresupuestoValido] = useState(false)

  return (
    <>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      />
    </>
  )
}

export default App
