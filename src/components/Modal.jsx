import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const cerrarModal = () => {
      setAnimarModal(false)
      
      setTimeout(() => {
        setModal(false)
      }, 500);
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
        <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
          <legend>Nuevo gasto</legend>
          <div className='campo'>
            <label htmlFor='nombre'>Nombre del gasto</label>
            <input 
              id = 'nombre'
              type = 'text'
              placeholder='Añade el nombre del gasto'
            />
          </div>
          <div className='campo'>
            <label htmlFor='cantidad'>Cantidad</label>
            <input 
              id = 'cantidad'
              type = 'number'
              placeholder='Añade el cantidad del gasto ej:300'
            />
          </div>
          <div className='campo'>
            <label htmlFor='categoria'>Categoria</label>
            <select id='categoria'>
              <option value=''>-- Seleccione  --</option>
              <option value='ahorro'>Ahorro</option>
              <option value='ahorro'>Casa</option>
              <option value='ahorro'>Comida</option>
              <option value='ahorro'>Salud</option>
              <option value='ahorro'>Gastos varios</option>
              <option value='ahorro'>Suscrpciones</option>
              <option value='ahorro'>Ocio</option>
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
