import { FilterValuesType } from "../../../global-types";

export type ButtonPropsType = {
	onKeyDown?: any;
	children?: any;
	className: string;
	disabled?: boolean;
	onChange?: () => void;
	onClick?: () => void;
	editTodo?: (id: string, taska: string) => void;
	changeFilter?: (value: FilterValuesType) => void;
};