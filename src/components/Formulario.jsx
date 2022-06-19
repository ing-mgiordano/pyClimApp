import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulario = () => {

    const [alerta, setAlerta] = useState('')

    const {busqueda, datosBusqueda, consultarClima} = useClima()

    const {ciudad, pais} = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }

        consultarClima(busqueda)

    }

    return (
        <div className="contenedor">

            {alert && <p>{alerta}</p>}
            <form
                onSubmit={handleSubmit}
            >
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        onChange={datosBusqueda}
                        value={ciudad}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select
                        name="pais"
                        id="pais"
                        onChange={datosBusqueda}
                        value={pais}
                    >
                        <option value="">-- Seleccione País --</option>
                        <option value="DE">Alemania</option>
                        <option value="AR">Argentina</option>
                        <option value="AT">Austria</option>
                        <option value="AU">Australia</option>
                        <option value="BS">Bahamas</option>
                        <option value="BO">Bolivia</option>
                        <option value="BR">Brasil</option>
                        <option value="CA">Canadá</option>
                        <option value="CN">China</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="AE">Emiratos Árabes Unidos</option>
                        <option value="ES">España</option>
                        <option value="US">Estados Unidos</option>
                        <option value="FR">Francia</option>
                        <option value="FI">Findalindia</option>
                        <option value="IT">Italia</option>
                        <option value="JP">Japón</option>
                        <option value="MX">México</option>
                        <option value="NZ">Nueva Zelanda</option>
                        <option value="PE">Perú</option>
                        <option value="GB">Reino Unido</option>
                        <option value="ZA">Sudáfrica</option>
                        <option value="CH">Suiza</option>
                        <option value="UA">Ucrania</option>
                        <option value="UY">Uruguay</option>
                    </select>
                </div>

                <input  
                    type="submit" 
                    value="Consultar Clima"    
                />
            </form>
        </div>
    )
}

export default Formulario
