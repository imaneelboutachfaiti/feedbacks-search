import React, { FC } from "react";
import "./Input.css";

interface Props {
  placeholder?: string;
  onChange: (value: "" | string) => void;
}

const Input: FC<Props> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        className="Search-field"
        {...props}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
