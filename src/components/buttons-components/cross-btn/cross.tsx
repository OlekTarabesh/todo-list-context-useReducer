import React from "react";

import Button from "../button/button";
import { CrossPropsType } from "./cross-types";

import styled from "./cross.module.css";

const Cross: React.FC <CrossPropsType>  = ({ onClick }) => {
	return (
		<div className={styled.cross}>
			<Button onClick={onClick} className={styled.crossBtn} />
		</div>
	);
};

export default Cross;
