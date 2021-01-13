import React, { FC } from "react";
import "./Input.css";

interface Props {
  placeholder?: string;
}

const Input: FC<Props> = (props) => {
  return <input placeholder={props.placeholder} />;
};

export default Input;