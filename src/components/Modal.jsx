import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal}) => {

    const cerrarModal = () => {
      setModal(false)
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
    </div>
  )
}

export default Modal
