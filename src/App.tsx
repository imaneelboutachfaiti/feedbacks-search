import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";
import RatingButton from "./Components/Button/Ratingbutton";
import { FetchFeedbacksData } from "./Components/Data/FetchFeedbacksData";
import Device from "./Components/Device/Device";
import smartPhone from "./Components/Device/smartphone.svg";
import monitor from "./Components/Device/monitor.svg";
import { isPropertySignature } from "typescript";

function App() {
  const [criteria, setCriteria] = useState<string>("");
  const [ratings, setRatings] = useState<number[]>([]);
  const [device, setDevice] = useState<"MOBILE" | "DESKTOP" | null>(null);

  const onRatingClick = (rate: number) => {
    ratings.includes(rate)
      ? setRatings(ratings.filter((item) => item !== rate))
      : setRatings(ratings.concat(rate));
  };

  return (
    <div className="App">
      <Header />
      <div className="filter-section">
        <Input onChange={setCriteria} placeholder="Search here!" />
        <div className="ratings">
          <RatingButton
            ratingValue={1}
            onClick={onRatingClick}
            selected={ratings.includes(1)}
          />
          <RatingButton
            ratingValue={2}
            onClick={onRatingClick}
            selected={ratings.includes(2)}
          />
          <RatingButton
            ratingValue={3}
            onClick={onRatingClick}
            selected={ratings.includes(3)}
          />
          <RatingButton
            ratingValue={4}
            onClick={onRatingClick}
            selected={ratings.includes(4)}
          />
          <RatingButton
            ratingValue={5}
            onClick={onRatingClick}
            selected={ratings.includes(5)}
          />
        </div>
        <div className="devices">
          <Device
            imgUrl={smartPhone}
            type="MOBILE"
            onClick={setDevice}
            selected={device == "MOBILE"}
          />
          <Device
            imgUrl={monitor}
            type="DESKTOP"
            onClick={setDevice}
            selected={device == "DESKTOP"}
          />
        </div>
      </div>

      <FetchFeedbacksData
        criteria={criteria}
        ratings={ratings}
        device={device}
      />
    </div>
  );
}

export default App;
