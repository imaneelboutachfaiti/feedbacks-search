import { type } from "os";
import React, { FC } from "react";
import "./Device.css";

interface props {
  imgUrl: string;
  type: string;
  onClick: (value: string) => void;
}

const Device: FC<props> = (props) => {
  const handleClick = () => {
    props.onClick(props.type);
  };

  return (
    <button className="device" onClick={handleClick}>
      <img src={props.imgUrl} alt="" />
    </button>
  );
};

export default Device;
