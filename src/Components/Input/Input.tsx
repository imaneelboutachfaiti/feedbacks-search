import React, { FC, useState } from "react";
import "./Input.css";
import FetchFeedbacksData from "../Data/FetchFeedbacksData";

interface Props {
  placeholder?: string;
  onChange: (value: '' | string) => void
}

const Input: FC<Props> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <input
        {...props}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
