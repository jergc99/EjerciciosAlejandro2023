import {useState} from "react";

function Contador() {

    const[contador, setContador] = useState(0)

    const aumentar = () => setContador(contador+1)
    const disminuir = () => setContador(contador-1)
    const reset = () => setContador(0)

    return(
        <>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
        <button onClick={reset}>Reset</button>
        <h2>{contador}</h2>
        </>
    )
}

export default Contador