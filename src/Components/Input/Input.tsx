import React, { FC, useState } from "react";
import "./Input.css";
import FetchFeedbacksData from "../Data/FetchFeedbacksData";

interface Props {
  placeholder?: string;
}

const Input: FC<Props> = (props) => {
  const [criteria, setCriteria] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.target.value);
  };
  return (
    <div>
      <input
        {...props}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
      <FetchFeedbacksData criteria={criteria} />
    </div>
  );
};

export default Input;
