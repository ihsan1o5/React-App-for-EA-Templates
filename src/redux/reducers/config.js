import { ActionConstants } from "../constants/types";

const initialState = {
    lesson_name: localStorage.getItem('lesson_name'),
    sco_number: localStorage.getItem('sco_number'),
    lang: localStorage.getItem('lang'),
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
            return {
                ...state,
                lesson_name: payload.payload.lesson_name,
                config: payload,
            }
        case ActionConstants.LOAD_CONFIG_FAIL:
            localStorage.removeItem('lesson_name');
            localStorage.removeItem('sco_number');
            localStorage.removeItem('lang');
            return {
                ...state,
                lesson_name: null,
                config: null,
            }
    
        default:
            return state;
    }
}
