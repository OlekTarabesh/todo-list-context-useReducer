import { ChangeEvent, Dispatch, ReactNode, KeyboardEvent } from "react";
import { TaskType } from "../global-types";

//============listOfTodos.context=================
export type ListOfTodosProviderTypes = {
    children: ReactNode;
    removeTask: (id: string) => void,
    editTodo: (id: string, value: string) => void,
}

export type ListOfTodosContextTypes = {
    removeTask: (id: string) => void,
    editTodo: (id: string, value: string) => void,
}

//============todo-app.context=================
export type TodoAppProviderType = {
    children: ReactNode;
    tasks: Array<TaskType>;
    filter: string;
    filteredTasks: Array<TaskType>;
    setTasks: () => void;
    changeStatus: (taskId: string, isDone: boolean) => void;
    setFilter: () => void;
    setError: (error: boolean) => void;
    changeFilter: (value: string) => void;
}

export type TodoAppContextType = {
    tasks: Array<TaskType>;
    filter: string;
    setTasks: Dispatch<TaskType[]>;
    setFilter: Dispatch<string>;
    filteredTasks: Array<TaskType>;
    changeStatus: (taskId: string, isDone: boolean) => void;
    changeFilter: (value: string) => void;
}

//============todo-input.context=================

export type TodoInputProviderTypes = {
    children: ReactNode;
}

export type TodoInputContextTypes = {
    value: string;
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    error: boolean,
    addTaskHandler: () => void;
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void,
}
