import React from 'react'
import LabelInput from '../../ui/LabelInput'

const Bibliografia = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <h1>Bibliografia de Asignaturas</h1>
        <LabelInput 
            label={"Bibliografia"}
            htmlFor={"materiales"}
        />
        <button>Continuar</button>
    </form>
  )
}

export default Bibliografia