import { createContext, useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import useAxiosFetch from '../hooks/useAxiosFetch';
import useAxiosPrivate from '../hooks/useAxiosPrivate';


const DataContext = createContext({});

export const DataProvider = () => {
    
    const [syllabusList, setSyllabusList] = useState([])
    /* const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]); */
    const [selectedCursoId, setSelectedCursoId] = useState(404)

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/syllabus');

    useEffect(() => {
        setSyllabusList(data);
    }, [data])
        /* 
        useEffect(() => {
        const filteredResults = posts.filter((post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());
    }, [posts, search]) */

/*     const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const effectRan = useRef(false)

    useEffect(() => {
        console.log('effect ran');
        let isMounted = true;
        const controller = new AbortController();
        
        if (effectRan.current === true) {

            const getUsers = async () => {
                try {
                    const response = await axiosPrivate.get('/syllabus', {
                        signal: controller.signal
                    });
                    console.log(response.data);
                    isMounted && setUsers(response.data);
                } catch (err) {
                    console.error(err);
                    navigate('/login', { state: { from: location }, replace: true });
                }
            }

            getUsers();
        }

        return () => {
            console.log('unmounted');
            effectRan.current = true
            isMounted = false;
            controller.abort();
        }
    }, []) */

    return (
        <DataContext.Provider value={{
            /* search, setSearch, */
            /* searchResults,  */fetchError, isLoading,
            syllabusList, setSyllabusList, selectedCursoId, setSelectedCursoId
        }}>
            <Outlet />
        </DataContext.Provider>
    )
}

export default DataContext;