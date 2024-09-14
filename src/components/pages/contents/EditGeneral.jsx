import React from 'react'
import LabelInput from '../../ui/LabelInput'
import LabelData from '../../ui/LabelData';
import { useState, useEffect, useContext } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import SyllabuContext from '../../../context/SyllabuContext';

const EditGeneral = ({ objSyllabus }) => {

    const axiosPrivate = useAxiosPrivate();
    const [competenciaGeneral, setCompetenciaGeneral] = useState()
    const [competenciaEspecifica, setCompetenciaEspecifica] = useState()
    const [logro, setLogro] = useState()
    const { setSyllabu } = useContext(SyllabuContext)

    //const { syllabusId, setSyllabusId, syllabu, setSyllabu } = useContext(SyllabuContext)

    const handleUpdate = async (e) => {
        e.preventDefault();
    
        const updatedSyllabus = {
            id: objSyllabus._id,
            competenciaGeneral,
            competenciaEspecifica,
            logro
        };
    
        try {
            const response = await axiosPrivate.put('/syllabus', updatedSyllabus);
            setSyllabu(response.data)
        } catch (err) {
            console.error('Failed to update post:', err);
        }
      };
    
    useEffect(() => {
        setCompetenciaGeneral(objSyllabus?.competencias?objSyllabus.competencias.competenciaGeneral:'')
        setCompetenciaEspecifica(objSyllabus?.competencias?objSyllabus.competencias.competenciaEspecifica:'')
        setLogro(objSyllabus?.logrosDeAprendizaje?objSyllabus.logrosDeAprendizaje.logro:'')
    }, [])
    

  return (
    <form onSubmit={handleUpdate}>
        <LabelData 
            label={"Nombre"}
            data={objSyllabus.nombreCurso?objSyllabus.nombreCurso: ""}
        />
        <LabelData 
            label={"Sumilla"}
            data={objSyllabus.sumilla?objSyllabus.sumilla: ""}
        />
        <LabelData 
            label={"Periodo"}
            data={objSyllabus.periodo?objSyllabus.periodo: ""}
        />
        <LabelData 
            label={"Profesor"}
            data={objSyllabus.profesor?objSyllabus.profesor: ""}
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

export default EditGeneral