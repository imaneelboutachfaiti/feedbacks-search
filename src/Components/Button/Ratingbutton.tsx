import React, { FC, Fragment, useState } from "react";
import FetchFeedbacksData from "../Data/FetchFeedbacksData";

interface props {
  ratingValue: number;
  onClick: (value: number) => void
}

const RatingButton: FC<props> = (props) => {
 
const handleclick = () => {
   props.onClick(props.ratingValue);
};
  return (
    <Fragment>
      <button onClick={handleclick}>{props.ratingValue}</button>
    </Fragment>
  );
};

export default RatingButton;
