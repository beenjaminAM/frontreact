import React, { useState, useEffect, useContext } from 'react'
import LabelInput from '../../ui/LabelInput'
import SyllabuContext from '../../../context/SyllabuContext';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const Programacion = () => {
  const { syllabu, setSyllabu, syllabusId } = useContext(SyllabuContext)
  const axiosPrivate = useAxiosPrivate();
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [teorico, setTeorico] = useState('')
  const [practico, setPractico] = useState('')

  useEffect(() => {
    if (!syllabusId) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axiosPrivate.get(`/syllabus/${syllabusId? syllabusId: "null"}`)
            setSyllabu(response.data)
            console.log(response.data)
        } catch (err) {
            setFetchError(err.message);
            setSyllabu(null);
        } finally {
            setIsLoading(false);
        }
      }
      fetchData()
    }   
  }, [])

  useEffect(() => {
    if (syllabu?._id) {
      setPractico(syllabu.programacion?.practico? syllabu.programacion.practico: "")
      setTeorico(syllabu.programacion?.teorico? syllabu.programacion.teorico: "")
    }
  }, [syllabu])

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedSyllabus = {
        id: syllabu._id,
        teorico,
        practico
    };

    try {
        const response = await axiosPrivate.put('/syllabus', updatedSyllabus);
        setSyllabu(response.data)
    } catch (err) {
        console.error('Failed to update post:', err);
    }
  };

  return (
    <>
      {syllabu?._id? (  
    <form onSubmit={handleUpdate}>
        <h1>Programacion de Asignaturas</h1>
        <LabelInput 
            label={"Contenido Teorico"}
            htmlFor={"teorico"}
            state={teorico}
            setState={setTeorico}
        />
        <LabelInput 
            label={"Contenido Practico"}
            htmlFor={"practico"}
            state={practico}
            setState={setPractico}
        />
        <button type="submit">Submit</button>
    </form>
      ) : (
        <>
            <h2>Post Not Found</h2>
            <p>Sorry, the syllabus you're trying to edit does not exist. Please enter the academic period in the 1st tab</p>
            {/* <p>
                <Link to="/">Visit Our Homepage</Link>
            </p> */}
        </>
      )}
    </>    
  )
}

export default Programacion