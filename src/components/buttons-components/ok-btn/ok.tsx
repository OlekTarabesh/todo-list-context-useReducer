import React from "react";

import Button from "../button/button";
import { OkPropsType } from "./ok-types";

import styled from "./ok.module.css";

const Ok: React.FC <OkPropsType> = ({ onClick, onKeyDown }) => {
	return (
		<div className={styled.ok} onClick={onClick} >
			<Button onKeyDown={onKeyDown} className={styled.okBtn} />
		</div>
	);
};

export default Ok;
