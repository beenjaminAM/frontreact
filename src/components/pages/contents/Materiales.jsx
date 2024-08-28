import React from 'react'
import LabelInput from '../../ui/LabelInput'

const Materiales = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <h1>Materiales y Estrategias de Aprendizaje</h1>
        <LabelInput 
            label={"Materiales"}
            htmlFor={"materiales"}
        />
        <LabelInput 
            label={"Estrategias de Aprendizaje"}
            htmlFor={"periodo"}
        />
        <button>Continuar</button>
    </form>
  )
}

export default Materiales