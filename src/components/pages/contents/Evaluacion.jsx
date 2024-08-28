import React from 'react'
import LabelInput from '../../ui/LabelInput'

const Evaluacion = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <h1>Evaluacion de Asignaturas</h1>
        <LabelInput 
            label={"Nota de Examen Final"}
            htmlFor={"materiales"}
        />
        <LabelInput 
            label={"Nota de Evaluacion Continuas"}
            htmlFor={"periodo"}
        />
        <button>Continuar</button>
    </form>
  )
}

export default Evaluacion