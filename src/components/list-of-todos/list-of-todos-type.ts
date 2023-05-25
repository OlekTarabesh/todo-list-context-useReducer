import { ChangeEvent } from "react";

export type ListOfTodosPropsType = {
	id: string;
	title: string;
	isDone: boolean;
	checked: boolean;
	filter: string;
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};