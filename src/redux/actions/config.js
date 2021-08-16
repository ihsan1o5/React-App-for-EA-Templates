import axios from 'axios';
import { ActionConstants } from "../constants/types";
import { EllApiUrl } from "../constants/urls";

export const load_config = (user_id, course_id, launch_config) => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${EllApiUrl.CONFIG_URL}/users/${user_id}/courses/${course_id}/launch-config/${launch_config}/`, config);
        console.log('response is ......', res);
        dispatch({
            type: ActionConstants.LOAD_CONFIG_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: ActionConstants.LOAD_CONFIG_FAIL
        });
    }
}


