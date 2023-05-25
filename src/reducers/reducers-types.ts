//=========todo-app-types====

import { TaskType } from "../global-types"
import { INPUT_ACTION_TYPES, TODOAPP_ACTION_TYPES } from "./action-types"

export type StateTypeApp = {
    filter: string,
    tasks: TaskType[]
}

export type ActionTasks = {
    type: TODOAPP_ACTION_TYPES.SET_TODOAPP_TASKS
    payload: TaskType[]
}
export type ActionFilter = {
    type: TODOAPP_ACTION_TYPES.SET_TODOAPP_FILTER
    payload: string
}
export type ActionType = ActionTasks | ActionFilter

//=========todo-input-types====

export type StateTypeInput = {
    value: string,
    error: boolean
}

export type ActionValue = {
    type: INPUT_ACTION_TYPES.SET_INPUT_VALUE
    payload: string
}
export type ActionError = {
    type: INPUT_ACTION_TYPES.SET_INPUT_ERROR
    payload: boolean
}
export type ActionTypeInput = ActionValue | ActionError