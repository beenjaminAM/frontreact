import React from 'react'
import LabelInput from '../../ui/LabelInput'
import LabelData from '../../ui/LabelData';
import { useState } from 'react';

const General = ({ onKeyChange, courseName, sumilla }) => {
    const [periodo, setPeriodo] = useState()
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <h1>Informacion General</h1>
        <LabelData 
            label={"Nombre"}
            data={courseName}
        />
        <LabelData 
            label={"Sumilla"}
            data={sumilla}
        />
        <LabelInput 
            label={"Periodo"}
            htmlFor={"periodo"}
            state={periodo}
            setState={setPeriodo}
        />
        <LabelInput 
            label={"Profesores"}
            htmlFor={"periodo"}
        />
        <LabelInput 
            label={"Competencias Generales"}
            htmlFor={"periodo"}
        />
        <LabelInput 
            label={"Competencias Especificas"}
            htmlFor={"periodo"}
        />
        <LabelInput 
            label={"Logros de Aprendizaje"}
            htmlFor={"periodo"}
        />
        <button type='button' onClick={() => onKeyChange('2')}>Change 2</button>
        <button>Continuar</button>
    </form>
  )
}

export default General