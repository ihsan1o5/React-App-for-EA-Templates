import { ActionConstants } from "../constants/types";


export const load_slider = () => dispatch => {
    const sco_num = localStorage.getItem('sco_number');
    const lang = localStorage.getItem('lang');

    try {
        const data = require(`../../../public/scos/${sco_num}/${lang}/lesson.json`);
        console.log('this is slider dispatch...', data);
        dispatch({
            type: ActionConstants.LOAD_SLIDER_SUCCESS,
            payload: data
        })        
    } catch (error) {
        dispatch({
            type: ActionConstants.LOAD_SLIDER_FAIL
        })
    }

    // console.log('this is slider dispatch...', Data);
}