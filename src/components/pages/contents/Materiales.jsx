import React, { useState, useEffect, useContext } from 'react'
import LabelInput from '../../ui/LabelInput'
import SyllabuContext from '../../../context/SyllabuContext';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';


const Materiales = () => {
  const { syllabu, setSyllabu, syllabusId } = useContext(SyllabuContext)
  const axiosPrivate = useAxiosPrivate();
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [material, setMaterial] = useState('')
  const [estrategia, setEstrategia] = useState('')

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
      setMaterial(syllabu.materiales?.material? syllabu.materiales.material: "")
      setEstrategia(syllabu.estrategias?.estrategia? syllabu.estrategias.estrategia: "")
    }
  }, [syllabu])

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedSyllabus = {
        id: syllabu._id,
        material,
        estrategia
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
            <h1>Materiales y Estrategias de Aprendizaje</h1>
            <LabelInput
                label={"Materiales"}
                htmlFor={"materiales"}
                state={material}
                setState={setMaterial}
            />
            <LabelInput 
                label={"Estrategias de Aprendizaje"}
                htmlFor={"periodo"}
                state={estrategia}
                setState={setEstrategia}
            />
            <button type="submit">Guardar y continuar</button>
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

export default Materiales