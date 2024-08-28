import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';


const SyllabuContext = createContext({});

export const SyllabusProvider = ({ children, id }) => {
    
    const [syllabu, setSyllabu] = useState(null)
    const [syllabusList, setSyllabusList] = useState([])

    const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:3500/syllabus/${id}`);

    useEffect(() => {
        setSyllabu(data);
    }, [data])

    return (
        <SyllabuContext.Provider value={{
            /* search, setSearch, */
            /* searchResults,  */fetchError, isLoading,
            syllabu, setSyllabu
        }}>
            { children }
        </SyllabuContext.Provider>
    )
}

export default SyllabuContext;