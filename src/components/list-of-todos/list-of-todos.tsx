import React, { 
	KeyboardEvent, 
	useEffect, 
	useRef, 
	useState, 
	useContext 
} from "react";

import Checkbox from "../buttons-components/checkbox/checkbox";
import EditTask from "../buttons-components/edit-task/editTask";
import Trash from "../buttons-components/trash-basket/trash";
import Ok from "../buttons-components/ok-btn/ok";
import Cross from "../buttons-components/cross-btn/cross";

import styled from "./list-of-todos.module.css";
import { ListOfTodosContext } from "../../contexts/listOfTodos.context"; 
import { ListOfTodosPropsType } from "./list-of-todos-type";

const ListOfTodos: React.FC<ListOfTodosPropsType> = ({
	title,
	id,
	isDone,
	checked,
	onChangeHandler,
}) => {
	const { editTodo, removeTask, } = useContext(ListOfTodosContext);

	const [value, setValue] = useState(title);
	const [editTask, setEditTask] = useState(false);
	const [error, setError] = useState(false);
	
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter' && value) {
			editTodo(id, value);
			setEditTask(false);
		} else {
			setError(true);
		}};

	const okBtnkHandler = () => {
		if(value === '') {
			setError(true);
		} else {
			editTodo(id, value);
			setEditTask(false);
		};
	};

	const crossBtnkHandler = () => {
		if(value === '' || value) {
			setEditTask(false);
			setValue(title);
			setError(false);
			} 
		};
	
	const editTaskBtnHandler = () => {
		if(isDone) {
			return
		} else {
			setEditTask(true);
		};
	};

	const trashBtnHandler = () => {
		removeTask(id);
	};


    const editTaskInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if(editTask) {
			editTaskInputRef?.current?.focus();
		}
	}, [editTask]);


	return (
			<div className={styled.container}>
				{editTask ? (
					<div className={`${checked ? styled.taskIsDone : styled.taskIsNotDone}`}>

						<input 
							ref={editTaskInputRef}
							value={value} 
							onKeyDown={onKeyDownHandler}
							placeholder={error ? 'Field is required' : ''}
							onChange={(e) => {
							setValue(e.target.value);
							setError(false)
						}} 
							className={`${error ? styled.inputError :  styled.input}`}/>

						<div className={styled.iconsContainer}>
							<Ok 
								onKeyDown={onKeyDownHandler}
								onClick={okBtnkHandler}
						/>
							<Cross onClick={crossBtnkHandler}/>
							</div>
						</div>

							) : (
								
						<div className={`${checked ? styled.taskIsDone : styled.taskIsNotDone}`}>

						<span className={styled.titleUpdate}>{title}</span>
						
						<div className={styled.iconsContainer}>
							<Checkbox 
								id={id} 
								disabled={editTask}
								onChange={onChangeHandler} 
								checked={isDone}
								/>	
							<EditTask
								onClick={editTaskBtnHandler}
								
								/>
							<Trash 
								onClick={trashBtnHandler}
								/>
						</div>
					</div>						
				)}
			</div>
	);
};

export default ListOfTodos;
