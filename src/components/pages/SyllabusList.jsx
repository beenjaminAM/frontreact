import { useState, useEffect, useRef, useContext } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from 'antd'
import SyllabuContext from '../../context/SyllabuContext';

const SyllabusList = () => {

    const [syllabus, setSyllabus] = useState([])

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/syllabus');

    useEffect(() => {
        setSyllabus(data);
    }, [data])

  return (
    <div className="table-container">
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Aca Period</th>
                    <th>Professor</th>
                    <th>Action</th>
                </tr>
            </thead>
            {syllabus?.length ? (
                <tbody>
                    {syllabus.map((syllabu, i) => (
                        <tr key={i}>
                            <td>{syllabu.nombreCurso}</td>
                            <td>{syllabu.periodo}</td>
                            <td>{syllabu.profesor}</td>
                            <td>
                                <div className="flexGrow">
                                    <button type='button' >Update Syllabus</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            ) : (
                <tbody>
                    <tr>
                        <td colSpan="4">No syllabus to display</td>
                    </tr>
                </tbody>
            )}
        </table>
    </div>

  )
}

export default SyllabusList