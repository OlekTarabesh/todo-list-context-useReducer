import { 
    ChangeEvent, 
    KeyboardEvent, 
    createContext, 
    useContext, 
    useReducer, 
} from "react";

import { TodoInputContextTypes, TodoInputProviderTypes } from "./context-types";
import { TodoAppContext } from "./todo-app.context";
import { inputReducer, INPUT_INITIAL_STATE } from "../reducers/todo-input.reducer";

import { v1 } from "uuid";
import { INPUT_ACTION_TYPES } from "../reducers/action-types";


export const TodoInputContext = createContext<TodoInputContextTypes>({
    value: '',
    error: false,
    inputHandler: () => null,
    addTaskHandler: () => null,
    onKeyPressHandler: () => null,
});



const TodoInputProvider: React.FC<TodoInputProviderTypes> = ({children}) => {

    const { tasks, setTasks } = useContext(TodoAppContext);

    const [ { error, value }, dispatch ] = useReducer(inputReducer, INPUT_INITIAL_STATE);
    
    const setValue = (value: string) => {
        dispatch({type: INPUT_ACTION_TYPES.SET_INPUT_VALUE, payload: value})
    }

    const setError = (error: boolean) => {
        dispatch({type: INPUT_ACTION_TYPES.SET_INPUT_ERROR, payload: error})
        console.log();   
    }
    
    const handelInput = (text: string) => {
            setValue(text);
        };
    
        const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
            handelInput(e.target.value);
        };
    
    const addTask = () => {
		const newTask = {
			id: v1(),
			title: value,
			isDone: false,
			isEditing: false,
		};

		if (newTask.title.trim() === "") {
			return;
		} else {
			let newTasks = [newTask, ...tasks];
			setTasks(newTasks);
			setValue("");
		}
	};

    const addTaskHandler = () => {
        if (value.length > 0) {
            addTask();
        } else {
            setError(true);
        }
    };


	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(false);
		if (e.key === "Enter" && value) {
			addTask();
		}
	};

    const todoInputValue = {
        value,
        inputHandler,
        error,
        addTaskHandler,
        onKeyPressHandler
    }
    return (
        <TodoInputContext.Provider value={todoInputValue}>{children}</TodoInputContext.Provider>
    )

}

export default TodoInputProvider;