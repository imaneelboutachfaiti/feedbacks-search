import { type } from "os";
import { FC } from "react";
import "./Device.css";

interface props {
  imgUrl: string;
  type: "MOBILE" | "DESKTOP";
  onClick: (value: "MOBILE" | "DESKTOP") => void;
  selected: boolean;
}

const Device: FC<props> = (props) => {
  const handleClick = () => {
    props.onClick(props.type);
  };

  const className = props.selected ? " selected" : "";
  return (
    <button className={"device" + className} onClick={handleClick}>
      <img src={props.imgUrl} alt="device-image" />
    </button>
  );
};

export default Device;
