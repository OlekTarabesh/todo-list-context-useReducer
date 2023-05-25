import { INPUT_ACTION_TYPES } from "./action-types"
import { ActionTypeInput, StateTypeInput } from "./reducers-types";

export const INPUT_INITIAL_STATE = {
    value: '',
    error: false
}


export const inputReducer = (state: StateTypeInput, action: ActionTypeInput) => {
    const { type, payload } = action;
    
    switch(type) {
        case INPUT_ACTION_TYPES.SET_INPUT_VALUE :
        return {
            ...state,
            value: payload
        }
        case INPUT_ACTION_TYPES.SET_INPUT_ERROR :
            return {
                ...state,
                error: payload
            }
            
            default: {
                throw new Error(`Unexpected type of ${type}`)
            }
    }
}