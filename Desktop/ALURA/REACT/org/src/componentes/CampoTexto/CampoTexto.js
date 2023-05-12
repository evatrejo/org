import { useState } from "react"
import "./Campo.css"

const Campo = (props) =>{
    //[acceder al valor, funcion que realizará el estado]

    //destructuracion 
    const {type ="text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const placeholderModificado = `${props.placeholder}...`
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required}
        onChange={manejarCambio}
        type = {type}
        />
    </div>
}

export default Campo