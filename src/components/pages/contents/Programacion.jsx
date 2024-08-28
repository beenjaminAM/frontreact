import React from 'react'
import LabelInput from '../../ui/LabelInput'

const Programacion = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <h1>Programacion de Asignaturas</h1>
        <LabelInput 
            label={"Contenido Teorico"}
            htmlFor={"materiales"}
        />
        <LabelInput 
            label={"Contenido Practico"}
            htmlFor={"periodo"}
        />
        <button>Continuar</button>
    </form>
  )
}

export default Programacion