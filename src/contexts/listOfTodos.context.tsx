import { createContext, useContext } from "react";
import { ListOfTodosProviderTypes } from "./context-types";
import { ListOfTodosContextTypes } from "./context-types";
import { TodoAppContext } from "./todo-app.context";


export const ListOfTodosContext = createContext<ListOfTodosContextTypes>({
    removeTask: () => null,
    editTodo: () => null,
});

const ListOfTodosProvider: React.FC<ListOfTodosProviderTypes> = ({children}) => {

    const { tasks, setTasks, } = useContext(TodoAppContext);

    const removeTask = (id: string) => {
    const filteredTask = tasks.filter((t) => t.id !== id);
    if(window.confirm('Are you sure?')) {
        setTasks(filteredTask);
    }
};

    const editTodo = (id: string, title: string) => {
        const editingTask = tasks.map((task) => ({
            ...task,
            title: task.id === id ? title : task.title
            })
        );
        setTasks([...editingTask]);
    };


    const listOfTodosValue = {
        removeTask,
        editTodo,  
    }
    return (
        <ListOfTodosContext.Provider value={listOfTodosValue}>{children}</ListOfTodosContext.Provider>
    )
}

export default ListOfTodosProvider;