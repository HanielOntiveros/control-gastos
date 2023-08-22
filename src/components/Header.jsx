import NuevoPresupuesto from "./NuevoPresupuesto"

export const Header = ({presupuesto, setPresupuesto,presupuestoValido,setPresupuestoValido}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            presupuestoValido={presupuestoValido}
            setPresupuestoValido={setPresupuestoValido}
        />
    </header>
  )
}

export default Header