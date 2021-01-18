import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";
import RatingButton from "./Components/Button/Ratingbutton";
import FetchFeedbacksData from "./Components/Data/FetchFeedbacksData";
import Device from "./Components/Device/Device";
import smartPhone from "./Components/Device/smartphone.svg";
import monitor from "./Components/Device/monitor.svg";

function App() {
  const [criteria, setCriteria] = useState<null | string>(null);
  const [ratings, setRatings] = useState<number[]>([]);
  const [device, setDevice] = useState('');

  function clicked(rate: number) {
    ratings.includes(rate)
      ? setRatings(ratings.filter((item) => item !== rate))
      : setRatings(ratings.concat(rate));
  }

  // function Checkdevice(type: string) {
  //   setDevice(type);
  // }

  console.log(device);
  return (
    <div className="App">
      <Header />
      <div>
        <div className="filter-section">
          <RatingButton
            ratingValue={1}
            onClick={clicked}
            selected={ratings.includes(1)}
          />
          <RatingButton
            ratingValue={2}
            onClick={clicked}
            selected={ratings.includes(2)}
          />
          <RatingButton
            ratingValue={3}
            onClick={clicked}
            selected={ratings.includes(3)}
          />
          <RatingButton
            ratingValue={4}
            onClick={clicked}
            selected={ratings.includes(4)}
          />
          <RatingButton
            ratingValue={5}
            onClick={clicked}
            selected={ratings.includes(5)}
          />
          <Device imgUrl={smartPhone} type="Mobile" onClick={setDevice} />
          <Device imgUrl={monitor} type="Desktop" onClick={setDevice} />
        </div>
        <Input onChange={setCriteria} placeholder="Search here!" />
      </div>
      <table>
        <tr className="table-space ">
          <th>Rating</th>
          <th>Comment</th>
          <th>platform</th>
          <th>Browser</th>
          <th>Device</th>
        </tr>
        <tbody>
          <FetchFeedbacksData criteria={criteria} ratings={ratings} device={device} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
