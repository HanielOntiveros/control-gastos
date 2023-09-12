import { useState,useEffect } from 'react'

import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'

import { generarID } from './helpers'

import IconoNuevoGasto from './img/nuevo-gasto.svg'

export default function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [presupuestoValido,setPresupuestoValido] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos,setGastos] = useState([])

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 300);
    }
  },[gastoEditar])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  }
    const guardarGasto = (gasto) => {
      gasto.id = generarID()
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto])
      console.log(gasto);
    }
  
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
        gastos = {gastos}
      />
      {presupuestoValido && (
      <>
      <main>
        <ListadoGastos 
          gastos={gastos}
          setGastoEditar = {setGastoEditar}
        />
      </main>

      <div className='nuevo-gasto'>
        <img 
          src={IconoNuevoGasto}
          alt='icono nuevo gasto'
          onClick={handleNuevoGasto}
          />
      </div>
      </>
      )}
      {modal && 
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto = {guardarGasto}
          gastoEditar = {gastoEditar}
      />}
  </div>
  )
}

