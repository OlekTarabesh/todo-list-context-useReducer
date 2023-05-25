import React, { useState } from "react";
import Cross from "../buttons-components/cross-btn/cross";
import Ok from "../buttons-components/ok-btn/ok";
import styled from "./edit-task-form.module.css";
import { EditTaskInputPropsType } from "./edit-task-type";


const EditTaskInput: React.FC <EditTaskInputPropsType> = ({
	id,
	value,
}) => {
	const [error, setError] = useState(null);
	const [inputValue, setInputValue] = useState(value);

	const inputHandler = (text: string) => {
		setInputValue(text);
	};

	return (
		<div className={styled.container}>
			<div className={styled.inputAndButtons}>
				<input
					id={id}
					type="text"
					value={inputValue}
					onChange={(e) => inputHandler(e.target.value)}
					className={`${error ? styled.error : styled.input}`}
				/>
				<div className={styled.buttonsContainer}>
					<Ok onClick={() => {}} />
					<Cross onClick={() => {}} />
				</div>
			</div>
		</div>
	);
};

export default EditTaskInput;
