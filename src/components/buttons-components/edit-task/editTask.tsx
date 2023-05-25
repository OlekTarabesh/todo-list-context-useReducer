import React from "react";

import Button from "../button/button";
import { EditTaskPropsType } from "./edit-task-types";

import styled from "./edit-task.module.css";


const EditTask: React.FC <EditTaskPropsType> = ({ onClick }) => {
	return (
		<div>
			<Button disabled={false}  onClick={onClick} className={styled.editTaskButton} />
		</div>
	);
};

export default EditTask;
