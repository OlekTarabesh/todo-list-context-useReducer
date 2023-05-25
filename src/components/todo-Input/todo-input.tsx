import React, { useContext } from "react";

import Button from "../buttons-components/button/button";
import plusBtn from '../../assets/plus.png'

import { TodoInputContext } from "../../contexts/todo-input.context";
import { v1 } from "uuid";
import styled from "./todo-input.module.css";


const TodoInput = () => {

	const { 
		value, 
		error, 
		inputHandler, 
		onKeyPressHandler, 
		addTaskHandler 
	} = useContext(TodoInputContext);

	return (
		<div className={styled.container}>
			<div className={styled.inputAndButton}>
				<input
					id={v1()}
					type="text"
					placeholder={error ? "Field is required" : "New Task..."}
					value={value}
					onChange={inputHandler}
					onKeyDown={onKeyPressHandler}
					className={`${error ? styled.error : styled.input}`}
				/>
				
				<Button
					onClick={addTaskHandler}
					className={`${
						error ? styled.inputButtonError : styled.inputButton
					}`}
				>
					<span className={styled.addBtn}>
						Add Task
					</span> 
						<img src={plusBtn} alt='alt' className={styled.addPlus} /> 
				</Button>
				{error && <div className={styled.errorMassage}>{error}</div>}
			</div>
		</div>
	);
};

export default TodoInput;
