import { useState, useEffect, useRef, useContext } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from 'antd'
import SyllabuContext from '../../context/SyllabuContext';

const Crear = () => {
    const [courses, setCourses] = useState()
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const effectRan = useRef(false)
    const { setCourseIdSelected, setSyllabu, setSyllabusId } = useContext(SyllabuContext)


    const createNewSyllabus = (idCourse) => {
        setCourseIdSelected(idCourse)
        navigate('/newsyllabus')
    }

    useEffect(() => {

        setCourseIdSelected(null)
        setSyllabu(null)
        setSyllabusId(null)
        console.log('effect ran');
        let isMounted = true;
        const controller = new AbortController();
        
        if (effectRan.current === true) {

            const getCourses = async () => {
                try {
                    const response = await axiosPrivate.get('/courses', {
                        signal: controller.signal
                    });
                    console.log(response.data);
                    isMounted && setCourses(response.data);
                } catch (err) {
                    console.error(err);
                    /* navigate('/login', { state: { from: location }, replace: true }); */
                }
            }

            getCourses();
        }

        return () => {
            console.log('unmounted');
            effectRan.current = true
            isMounted = false;
            controller.abort();
        }
    }, [])
  return (
    <div className="table-container">
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hours</th>
                    <th>Requirement</th>
                    <th>Action</th>
                </tr>
            </thead>
            {courses?.length ? (
                <tbody>
                    {courses.map((course, i) => (
                        <tr key={i}>
                            <td>{course.name}</td>
                            <td>{course.hours}</td>
                            <td>{course.requirement}</td>
                            <td>
                                <div className="flexGrow">
                                    <button type='button' onClick={() => createNewSyllabus(course._id)}>Crear Syllabus</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            ) : (
                <tbody>
                    <tr>
                        <td colSpan="4">No courses to display</td>
                    </tr>
                </tbody>
            )}
        </table>
    </div>

  )
}

export default Crear