import { ActionConstants } from "../constants/types";
import { store } from "../store";


export const load_slider = (exe) => dispatch => {
    const sco_num = localStorage.getItem('sco_number');
    const lang = localStorage.getItem('lang');

    try {
        const data = require(`../../../public/scos/${sco_num}/${lang}/lesson.json`);
        console.log('this is slider dispatch...', data);
        dispatch({
            type: ActionConstants.LOAD_SLIDER_SUCCESS,
            payload: {
                'data': data,
                'exe': exe,
            }
        })        
    } catch (error) {
        dispatch({
            type: ActionConstants.LOAD_SLIDER_FAIL
        })
    }

    // console.log('this is slider dispatch...', Data);
}

export const response_to_a_question = (question_no, question_response) => dispatch => {
    try {
        dispatch({
            type: ActionConstants.QUESTION_RESPONSE_SUCCESS,
            payload: {
                'question_response': question_response == 0 ? 'wrong' : 'correct',
                'question_no': question_no,
            },
        })
    } catch (error) {
        dispatch ({
            type: ActionConstants.QUESTION_RESPONSE_FAIL
        })
    }
    console.log('hello this is a response in the actions for a question...', question_no, question_response);
}

export const keep_time_slots = () => dispatch => {
    let initial_time = store.getState().lesson.initial_time
    let final_time = Math.floor(Date.now()/1000);

    let total_time_slot = (final_time - initial_time);

    try {
        dispatch({
            type: ActionConstants.KEEP_TIME_SUCCESS,
            payload: total_time_slot,
        });
    } catch (error) {
        dispatch({
            type: ActionConstants.LOAD_CONFIG_FAIL
        })
    }
}