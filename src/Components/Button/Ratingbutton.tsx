import React, { FC, Fragment, useState } from "react";
import "./RatingButton.css";

interface props {
  ratingValue: number;
  onClick: (value: number) => void;
  selected: boolean;
}

const RatingButton: FC<props> = (props) => {
  const handleclick = () => {
    props.onClick(props.ratingValue);
  };

  const className = props.selected ? "selected-rate" : "";
  return (
    <button className={className} onClick={handleclick}>
      {props.ratingValue}
    </button>
  );
};

export default RatingButton;
