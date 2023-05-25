import { useContext } from "react";


import Button from "../button/button";
import { TodoAppContext } from "../../../contexts/todo-app.context";

import styled from "./button.module.css";

const FilterButtons = () => {

	const { filter, changeFilter } = useContext(TodoAppContext);

	const onAllFilterHandler = () => {
		changeFilter("all");
	};
	const onActiveFilterHandler = () => {
		changeFilter("active");
	};
	const onCompletedFilterHandler = () => {
		changeFilter("completed");
	};
	
	return (
		<div className={styled.container}>
			<Button
				onClick={ onAllFilterHandler}
				className={`${filter === "all" ? styled.active : styled.buttons}`}
			>
				All
			</Button>
			<Button
				onClick={onActiveFilterHandler}
				className={`${filter === "active" ? styled.active : styled.buttons}`}
			>
				Active
			</Button>
			<Button
				onClick={onCompletedFilterHandler}
				className={`${filter === "completed" ? styled.active : styled.buttons}`}
			>
				Completed
			</Button>
		</div>
	);
};

export default FilterButtons;
