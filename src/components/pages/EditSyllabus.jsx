import React, { useContext, useEffect, useState } from 'react'
import Tab from '../../components/ui/Tab'
import EditGeneral from './contents/EditGeneral';
import Materiales from './contents/Materiales';
import Programacion from './contents/Programacion';
import Evaluacion from './contents/Evaluacion';
import Bibliografia from './contents/Bibliografia';
import useAxiosFetch from '../../hooks/useAxiosFetch';
import SyllabuContext from '../../context/SyllabuContext';

const EditSyllabus = () => {
  const [courseName, setCourseName] = useState()
  const [sumilla, setSumilla] = useState()
  
  const { syllabu} = useContext(SyllabuContext)
  const [activeKey, setActiveKey] = useState('1')
  const onKeyChange = (key) => setActiveKey(key)
  

    const items = [
        {
          key: '1',
          label: 'Informacion General',
          children: (
            <EditGeneral
              onKeyChange={onKeyChange}
              courseName={courseName}
              sumilla={sumilla}
            
              objSyllabus={syllabu}
            />
          ),
        },/*
        {
          key: '2',
          label: 'Materiales',
          children: (
            <Materiales
            
              objSyllabus={syllabu}
            />
          ),
        },
        {
          key: '3',
          label: 'Programacion',
          children: (
            <Programacion 
              objSyllabus={syllabu}
            />
          ),
        },
        {
          key: '4',
          label: 'Evaluacion',
          children: (
            <Evaluacion 
              objSyllabus={syllabu}
            />
          ),
        },
        {
          key: '5',
          label: 'Bibliografia',
          children: (
            <>
              <Bibliografia 
              objSyllabus={syllabu}
              />
                {/* <p>long content</p>
                {
                    // indicates very long content
                    Array.from({ length: 10 }, (_, index) => (
                        <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                    </React.Fragment>
                ))
                } 
            </>
          ),
        },*/
      ];
  return (
    <><>

                <h1>Crear Syllabus</h1>
                <Tab
                  items={items} 
                  onKeyChange={onKeyChange}
                  activeKey={activeKey}
                />
              </>
    </>
  )
}

export default EditSyllabus