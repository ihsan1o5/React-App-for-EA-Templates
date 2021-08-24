import { ActionConstants } from "../constants/types";


const initialState = {
    lesson: null,
    exe: null,
    initial_time: null,
    ques_response: [],
    elapsed_questions: null,
    time_slots: [],
}

export default function (state = initialState, action) {
    const {type, payload} = action;
    console.log('response payload is....', payload);
    switch (type) {
        case ActionConstants.LOAD_SLIDER_SUCCESS:
            return {
                ...state,
                lesson: payload.data,
                exe: payload.exe,
                initial_time: Math.floor(Date.now()/1000),
            }
        case ActionConstants.LOAD_SLIDER_FAIL:
            return {
                ...state,
            }
        case ActionConstants.QUESTION_RESPONSE_SUCCESS:
            return {
                ...state,
                ques_response: [payload.question_response, ...state.ques_response],
                elapsed_questions: payload.question_no
            }
        case ActionConstants.QUESTION_RESPONSE_FAIL:
            return {
                ...state
            }
        case ActionConstants.KEEP_TIME_SUCCESS:
            return {
                ...state,
                time_slots: [payload, ...state.time_slots],
            }
        case ActionConstants.KEEP_TIME_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}