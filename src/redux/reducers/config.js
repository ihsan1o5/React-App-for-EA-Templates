import { ActionConstants } from "../constants/types";

const initialState = {
    lesson_name: localStorage.getItem('lesson_name'),
    sco_number: localStorage.getItem('sco_number'),
    lang: localStorage.getItem('lang'),
    student_name: localStorage.getItem('student_name'),
    student_id: localStorage.getItem('student_id'),
    course_id: localStorage.getItem('course_id'),
    config: null,
};

export default function ( state =  initialState, action ) {
    const { type, payload } = action;
    
    switch (type) {
        case ActionConstants.LOAD_CONFIG_SUCCESS:
            // const LessonData = require(`../../scos/${payload.payload.sco_number}/${payload.payload.lang}/lesson.json`);
            localStorage.setItem('lesson_name', payload.payload.lesson_name);
            localStorage.setItem('sco_number', payload.payload.sco_number);
            localStorage.setItem('lang', payload.payload.lang);
            localStorage.setItem('student_name', payload.payload.student_name);
            localStorage.setItem('student_id', payload.payload.student_id);
            localStorage.setItem('course_id', payload.payload.course_id);
            return {
                ...state,
                lesson_name: payload.payload.lesson_name,
                config: payload,
            }
        case ActionConstants.LOAD_CONFIG_FAIL:
            localStorage.removeItem('lesson_name');
            localStorage.removeItem('sco_number');
            localStorage.removeItem('lang');
            localStorage.removeItem('student_name');
            localStorage.removeItem('student_id');
            localStorage.removeItem('course_id');
            return {
                ...state,
                lesson_name: null,
                config: null,
            }
    
        default:
            return state;
    }
}
