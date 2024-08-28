import React, { useContext, useEffect, useState } from 'react'
import Tab from '../../components/ui/Tab'
import General from './contents/General';
import Materiales from './contents/Materiales';
import Programacion from './contents/Programacion';
import Evaluacion from './contents/Evaluacion';
import Bibliografia from './contents/Bibliografia';
import { useParams } from 'react-router-dom';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import DataContext from '../../context/DataContext';
import { syllabuReducer, initialState, fetchSyllabu, updateSyllabu } from '../../services/syllabuReducer';

const NewSyllabus = () => {
  const [courseName, setCourseName] = useState()
  const [sumilla, setSumilla] = useState()
  const { selectedCursoId } = useContext(DataContext)
  const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/courses/${selectedCursoId}`)
  const [activeKey, setActiveKey] = useState('1')
  const onKeyChange = (key) => setActiveKey(key)

  useEffect(() => {
    if (!fetchError && !isLoading) {
      console.log(data.name)
      setCourseName(data.name)
      setSumilla(data.sumilla)
    }
  }, [data])
  

    const items = [
        {
          key: '1',
          label: 'Informacion General',
          children: (
            <General
              onKeyChange={onKeyChange}
              courseName={courseName}
              sumilla={sumilla}
            />
          ),
        },
        {
          key: '2',
          label: 'Materiales',
          children: (
            <Materiales />
          ),
        },
        {
          key: '3',
          label: 'Programacion',
          children: (
            <Programacion />
          ),
        },
        {
          key: '4',
          label: 'Evaluacion',
          children: (
            <Evaluacion />
          ),
        },
        {
          key: '5',
          label: 'Bibliografia',
          children: (
            <>
              <Bibliografia />
                {/* <p>long content</p>
                {
                    // indicates very long content
                    Array.from({ length: 10 }, (_, index) => (
                        <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                    </React.Fragment>
                ))
                } */}
            </>
          ),
        },
      ];
  return (
    <>
            {isLoading && <p>Loading...</p>}
            {!isLoading && !fetchError && 
              <>
                <h1>Crear Syllabus</h1>
                <h2>Syllabus List</h2>
                <Tab
                  items={items} 
                  onKeyChange={onKeyChange}
                  activeKey={activeKey}
                />
              </>
            }
            {!isLoading && fetchError && <p>{fetchError}</p>}
    </>
  )
}

export default NewSyllabus