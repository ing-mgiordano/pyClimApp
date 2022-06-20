import useClima from "../hooks/useClima"

const Resultado = () => {

    const {resultado} = useClima()

    const {name, main} = resultado

    return (
    
        <div className="contenedor clima">
            <h2>El Clima de {name} es: </h2>

            <p>
                {parseInt(main.temp)}&#x2103;
            </p>
            <div className="temp_min_max">
                <p>
                    Mín: {parseInt(main.temp_min)}<span>&#x2103;</span>
                </p>
                <p>
                    Máx: {parseInt(main.temp_max)}<span>&#x2103;</span>
                </p>
            </div>
        </div>
        
    )
}

export default Resultado
