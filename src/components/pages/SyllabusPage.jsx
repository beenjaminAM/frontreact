import React from 'react'
import { useState, useEffect, useContext } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import SyllabuContext from '../../context/SyllabuContext';
import LabelData from '../ui/LabelData';


const SyllabusPage = () => {
    const [dataSyllabu, setDataSyllabu] = useState()
    const { syllabu} = useContext(SyllabuContext)
    const axiosPrivate = useAxiosPrivate();
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [bibliografia, setBibliografia] = useState('')
  
    useEffect(() => {
        setDataSyllabu(syllabu)
    }, [])

  return (
    <>
        {
            syllabu? (
                <>
                    <h1>Syllabus de {syllabu.nombreCurso?syllabu.nombreCurso: ""}</h1>
                    <LabelData 
                        label={"Sumilla"}
                        data={syllabu.sumilla}
                    />
                    <LabelData 
                        label={"Profesor"}
                        data={syllabu.profesor}
                    />
                    <LabelData 
                        label={"Periodo"}
                        data={syllabu.periodo}
                    />
                    <LabelData 
                        label={"Competencias generales"}
                        data={syllabu.competencias?syllabu.competencias.competenciaGeneral:''}
                    />
                    <LabelData 
                        label={"Competencias especificas"}
                        data={syllabu.competencias?syllabu.competencias.competenciaEspecifica:''}
                    />
                    <LabelData 
                        label={"Logros De Aprendizaje"}
                        data={syllabu.logrosDeAprendizaje?syllabu.logrosDeAprendizaje.logro:''}
                    />
                    <LabelData 
                        label={"Material"}
                        data={syllabu.materiales?syllabu.materiales.material: ''}
                    />
                    <LabelData 
                        label={"Programacion teorica"}
                        data={syllabu.programacion?syllabu.programacion.teorico: ''}
                    />
                    <LabelData 
                        label={"Programacion practica"}
                        data={syllabu.programacion?syllabu.programacion.practico: ''}
                    />
                    <LabelData 
                        label={"Evaluacion Final"}
                        data={syllabu.evaluacion?syllabu.evaluacion.parcial: ''}
                    />
                    <LabelData 
                        label={"Evaluacion Parcial"}
                        data={syllabu.evaluacion?syllabu.evaluacion.final: ''}
                    />
                    <LabelData 
                        label={"Evaluacion Continua"}
                        data={syllabu.evaluacion?syllabu.evaluacion.evaluacionContinua: ''}
                    />
                    <LabelData 
                        label={"Bibliografia"}
                        data={syllabu.bibliografia?syllabu.bibliografia.bibliografia: ''}
                    />
                </>
            ):(
                <h1>Not found</h1>
            )
        }
    </>
  )
}

export default SyllabusPage