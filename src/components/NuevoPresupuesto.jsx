import { useState } from "react";
import { Mensaje } from "./Mensaje";

export const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    const [mensaje, setMensaje] = useState('')
    
    const handlePresupuesto = (e) => {
        e.preventDefault()
        if(!presupuesto || presupuesto < 0){
            setMensaje('Presupuesto no valido')
            return
        } else{

            setMensaje('')
            console.log(presupuesto);
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
                <label>Definir presupuesto</label>
                <input 
                    className="nuevo-presupuesto"
                    type='number'
                    placeholder="Añade tu presupuesto"
                    value={presupuesto}
                    onChange={(e) => {
                        setPresupuesto(Number(e.target.value))
                    }}
                />
            </div>
            <input 
                value="Añadir"
                type="submit"
            />
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto
