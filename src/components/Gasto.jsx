import { 
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions, 
} from "react-swipeable-list"
import 'react-swipeable-list/dist/styles.css'
import { dateFormat } from "../helpers"
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const Gasto = ({gasto}) => {
    const diccionarioIconos = {
        ahorro : IconoAhorro,
        cosa: IconoCasa,
        comida: IconoComida,
        salud: IconoSalud,
        gastosVarios: IconoGastos,
        suscripciones: IconoSuscripciones,
        ocio: IconoOcio
        }


         
        
        
  return (
    <div className='gasto sombra'>
        <div className="contenido-gasto">
        <img
            className="" 
            src={diccionarioIconos[gasto.categoria]} 
            alt = 'Icono gasto'
            />
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                <p className='categoria'>{gasto.categoria}</p>  
                <p className='nombre-gasto'>{gasto.nombre}</p>
                <p className="fecha-gasto">Agregado el: {''}<span>{dateFormat(gasto.fecha)}</span> </p>
            </div>
        </div>
        </div>
        <p className="cantidad-gasto">${gasto.cantidad}</p>
    </div>
  )
}

export default Gasto
 