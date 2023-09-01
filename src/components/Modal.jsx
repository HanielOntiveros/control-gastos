import { useState } from 'react'
import  Mensaje  from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
    const [nombre,setNombre] = useState('')
    const [cantidad,setCantidad] = useState('')
    const [categoria,setCategoria] = useState('')
    const [mensaje,setMensaje] = useState('')

    const cerrarModal = () => {
      setAnimarModal(false)
      
      setTimeout(() => {
        setModal(false)
      }, 500);
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if([nombre, cantidad, categoria].includes('')){
        setMensaje('Todos los campos son obligatorios')
        setTimeout(() => {
          setMensaje('')
        }, 2000);
        return
      }else{
        guardarGasto({nombre,cantidad,categoria})
        cerrarModal()
      }
    }


  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarBtn}
                alt='Cerrar modal'
                onClick={cerrarModal}
            />
        </div>
        <form 
          className={`formulario ${animarModal ? "animar" : "cerrar"}`}
          onSubmit={handleSubmit}
        >
          <legend>Nuevo gasto</legend>
          {mensaje  && <Mensaje tipo='error'>{mensaje}</Mensaje>}
          <div className='campo'>
            <label htmlFor='nombre'>Nombre del gasto</label>
            <input 
              id = 'nombre'
              type = 'text'
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value)
              }}
              placeholder='Añade el nombre del gasto'
            />
          </div>
          <div className='campo'>
            <label htmlFor='cantidad'>Cantidad</label>
            <input 
              id = 'cantidad'
              type = 'number'
              value={cantidad}
              onChange={(e) => {
                setCantidad(e.target.value)
              }}
              placeholder='Añade el cantidad del gasto ej:300'
            />
          </div>
          <div className='campo'>
            <label htmlFor='categoria'>Categoria</label>
            <select 
              id='categoria'
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value)
              }}
            >
              <option value=''>-- Seleccione  --</option>
              <option value='ahorro'>Ahorro</option>
              <option value='casa'>Casa</option>
              <option value='comida'>Comida</option>
              <option value='salud'>Salud</option>
              <option value='gastos-varios'>Gastos varios</option>
              <option value='suscripciones'>Suscripciones</option>
              <option value='ocio'>Ocio</option>
            </select>
          </div>

          <input 
            type='submit'
            value='AÑDIR GASTO'
          />
        </form>
        
    </div>
  )
}

export default Modal
