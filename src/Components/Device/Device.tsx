import { FC } from "react";
import "./Device.css";

interface props {
  imgUrl: string;
  type: "MOBILE" | "DESKTOP";
  onClick: (value: "MOBILE" | "DESKTOP") => void;
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
