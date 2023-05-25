import { createContext, useEffect, useReducer } from "react";
import { TodoAppProviderType, TodoAppContextType } from "./context-types";
import { TaskType } from "../global-types";
import { INITIAL_STATE, todoAppReducer } from "../reducers/todo-app.reducer";
import { TODOAPP_ACTION_TYPES } from "../reducers/action-types";


export const TodoAppContext = createContext<TodoAppContextType>({
    tasks: [],
    filter: 'all',
    filteredTasks: [],
    setTasks: () => null,
    changeStatus: () => null,
    setFilter: () => null,
    changeFilter: () => null
});


const TodoAppProvider: React.FC<TodoAppProviderType> = ({children}) => {

    const [{filter, tasks}, dispatch] = useReducer(todoAppReducer, INITIAL_STATE)
    
    const setTasks = (taska: Array<TaskType>) => {
        dispatch({type: TODOAPP_ACTION_TYPES.SET_TODOAPP_TASKS, payload: taska})
    }

    const setFilter = (values: string) => {
        dispatch({type: TODOAPP_ACTION_TYPES.SET_TODOAPP_FILTER, payload: values})
    }

    useEffect(() => {
		if(tasks.length !== 0) {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		} else {
			localStorage.setItem('tasks', JSON.stringify([]));
		}
		setTasks(tasks);
	}, [tasks]);

    
    const changeStatus = (taskId: string, isDone: boolean) => {
        const task = tasks.find((t: any) => t.id === taskId);
            if (task) {
                task.isDone = !task.isDone;
            }
        setTasks([...tasks]);
    };
	

    let filteredTasks = tasks;
        if(filter === 'active') {
            filteredTasks = tasks.filter((t: any) => t.isDone === false);
		} else if (filter === 'completed') {
		    filteredTasks = tasks.filter((t: any) => t.isDone === true);
		}

		function changeFilter(value: string) {
			setFilter(value);
		}

    const contextValue = {
        tasks, 
        setTasks, 
        changeStatus,
        filter,
        setFilter,
        changeFilter,
        filteredTasks,
    };

    return (
        <TodoAppContext.Provider value={contextValue}>{children}</TodoAppContext.Provider>
    )
}

export default TodoAppProvider;