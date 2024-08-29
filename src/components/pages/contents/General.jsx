import React from 'react'
import LabelInput from '../../ui/LabelInput'
import LabelData from '../../ui/LabelData';
import { useState, useReducer, useEffect, useContext } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import SyllabuContext from '../../../context/SyllabuContext';

const General = ({ onKeyChange, courseName, sumilla }) => {

    const axiosPrivate = useAxiosPrivate();
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [periodo, setPeriodo] = useState()
    const [profesor, setProfesor] = useState()
    const [competenciaGeneral, setCompetenciaGeneral] = useState()
    const [competenciaEspecifica, setCompetenciaEspecifica] = useState()
    const [logro, setLogro] = useState()

    const { syllabusId, setSyllabusId, syllabu, setSyllabu } = useContext(SyllabuContext)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSyllabus = {
            periodo,
            nombreCurso: courseName,
            sumilla: sumilla,
            profesor,
            competenciaGeneral,
            competenciaEspecifica,
            logro
        }
        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axiosPrivate.post(url, newSyllabus);
                setSyllabusId(response.data._id)
                setSyllabu(response.data)
                console.log(response.data)
            } catch (err) {
                setFetchError(err.message);
                setSyllabu(null);
            } finally {
                setIsLoading(false);
            }
        }
        if (!syllabusId) {
            fetchData('http://localhost:3500/syllabus/')
        } 
            
    }

    useEffect(() => {
      console.log(syllabu)
    }, [syllabu])
    

  return (
    <form onSubmit={handleSubmit}>
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
            placeholder={"Ingrese el periodo academico"}
            required={true}
        />
        <LabelInput 
            label={"Profesores"}
            htmlFor={"profesores"}
            state={profesor}
            setState={setProfesor}
            required={true}
        />
        <LabelInput 
            label={"Competencias Generales"}
            htmlFor={"competenciasGenerales"}
            state={competenciaGeneral}
            setState={setCompetenciaGeneral}
            required={true}
        />
        <LabelInput 
            label={"Competencias Especificas"}
            htmlFor={"competenciasEspeciificas"}
            state={competenciaEspecifica}
            setState={setCompetenciaEspecifica}
            required={true}
        />
        <LabelInput 
            label={"Logros de Aprendizaje"}
            htmlFor={"logrosDeAprendizaje"}
            state={logro}
            setState={setLogro}
            required={true}
        />
        {/* <button type='button' onClick={() => onKeyChange('2')}>Change 2</button> */}
        <button type='submit'>Submit</button>
    </form>
  )
}

export default General