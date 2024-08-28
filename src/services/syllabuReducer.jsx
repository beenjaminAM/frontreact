import axios from 'axios';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

export const initialState = {
    id: null,
    syllabu: {
        periodo: '',
        nombreCurso: '',
        sumilla: '',
        profesor: '',
        competencias: {
            competenciaGeneral: '',
            competenciaEspecifica: '',
        },
        logrosDeAprendizaje: {
            logro: '',
        },
        materiales: {
            material: '',
        },
        estrategias: {
            estrategia: '',
        },
        programacion: {
            teorico: '',
            practico: '',
        },
        evaluacion: {
            parcial: '',
            final: '',
            evaluacionContinua: '',
        },
        bibliografia: {
            bibliografia: '',
        },
    },
    loading: false,
    error: null,
    success: null,
};

export const syllabuReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ID':
            return {
                ...state,
                id: action.payload,
            };
        
        case 'FETCH_SYLLABU_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
                success: null,
            };
        
        case 'FETCH_SYLLABU_SUCCESS':
            return {
                ...state,
                loading: false,
                syllabu: action.payload,
            };
        
        case 'FETCH_SYLLABU_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        
        case 'UPDATE_SYLLABU_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
                success: null,
            };
        
        case 'UPDATE_SYLLABU_SUCCESS':
            return {
                ...state,
                loading: false,
                success: 'Syllabus updated successfully!',
            };
        
        case 'UPDATE_SYLLABU_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        
        default:
            return state;
    }
};

export const fetchSyllabu = async (dispatch, id) => {
    const axiosPrivate = useAxiosPrivate();

    dispatch({ type: 'FETCH_SYLLABU_REQUEST' });

    try {
        const response = await axiosPrivate.get(`http://localhost:3500/syllabus/${id}`);
        dispatch({ type: 'FETCH_SYLLABU_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_SYLLABU_FAILURE', payload: error.message });
    }
};

export const updateSyllabu = async (dispatch, id, updatedFields) => {
    const axiosPrivate = useAxiosPrivate();

    dispatch({ type: 'UPDATE_SYLLABU_REQUEST' });

    try {
        const response = await axiosPrivate.put(`http://localhost:3500/syllabus/${id}`, updatedFields);
        dispatch({ type: 'UPDATE_SYLLABU_SUCCESS' });
        dispatch({ type: 'FETCH_SYLLABU_SUCCESS', payload: response.data });
        await fetchSyllabu(dispatch, id);
    } catch (error) {
        dispatch({ type: 'UPDATE_SYLLABU_FAILURE', payload: error.message });
    }
};
