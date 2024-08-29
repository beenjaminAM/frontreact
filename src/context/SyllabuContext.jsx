import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { Outlet } from 'react-router-dom';


const SyllabuContext = createContext();

export const SyllabusProvider = () => {
    const [courseIdSelected, setCourseIdSelected] = useState('404');
    const [syllabu, setSyllabu] = useState()
    const [syllabusId, setSyllabusId] = useState()
    
    
    return (
        <SyllabuContext.Provider value={{
            /* search, setSearch, */
            /* searchResults,  */syllabusId, setSyllabusId,
            syllabu, setSyllabu, courseIdSelected, setCourseIdSelected
        }}>
            <Outlet />
        </SyllabuContext.Provider>
    )
}

export default SyllabuContext;