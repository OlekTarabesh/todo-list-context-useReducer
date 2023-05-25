import { TODOAPP_ACTION_TYPES } from "./action-types";
import { ActionType, StateTypeApp } from "./reducers-types";


export const INITIAL_STATE = {
    filter: 'all',
    tasks: JSON.parse(window.localStorage.getItem('tasks') || '[]'),
}

export const todoAppReducer = (state: StateTypeApp, action: ActionType) => {
    
    const { type, payload } = action;

    switch(type) {
        case TODOAPP_ACTION_TYPES.SET_TODOAPP_TASKS :
            return {
                ...state,
                tasks: payload
            }
        case TODOAPP_ACTION_TYPES.SET_TODOAPP_FILTER :
            return {
                ...state,
                filter: payload
            }
            default: {
                throw new Error(`Unexpected type of ${type}`)
            }
    }
}