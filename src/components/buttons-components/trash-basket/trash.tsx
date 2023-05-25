import React from "react";

import Button from "../button/button";
import styled from "./trash.module.css";
import { TrashPropsType } from "./trash-types";

const Trash: React.FC <TrashPropsType> = ({ onClick }) => {
	return (
		<div className={styled.deleteButton}>
			<Button onClick={onClick} className={styled.deleteButton} />
		</div>
	);
};

export default Trash;
