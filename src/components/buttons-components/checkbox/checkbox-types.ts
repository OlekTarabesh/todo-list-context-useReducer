import { ChangeEvent } from "react";

export type CheckboxPropsType = {
	id: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
	disabled: boolean;
};