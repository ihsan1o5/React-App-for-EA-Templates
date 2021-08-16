import { ActionConstants } from "../constants/types";


const initialState = {
    lesson: null
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case ActionConstants.LOAD_SLIDER_SUCCESS:
            return {
                ...state,
                lesson: payload,
            }
        case ActionConstants.LOAD_SLIDER_FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
}