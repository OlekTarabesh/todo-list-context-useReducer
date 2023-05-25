import React from "react";

import { ButtonPropsType } from "./button-types";

const Button: React.FC<ButtonPropsType> = ({
	onClick,
	onChange,
	onKeyDown,
	children,
	className,
}) => {
	return (
		<button onKeyDown={onKeyDown} disabled={false} onChange={onChange} className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
