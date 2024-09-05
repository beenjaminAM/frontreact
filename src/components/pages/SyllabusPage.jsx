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
                        label={"Logros De Aprendizaje"}
                        data={syllabu.logrosDeAprendizaje?syllabu.logrosDeAprendizaje.logro:''}
                    />
                    <LabelData 
                        label={"Estrategias"}
                        data={syllabu.estrategias?syllabu.estrategias.estrategia: ''}
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