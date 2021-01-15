import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";
import RatingButton from "./Components/Button/Ratingbutton";
import FetchFeedbacksData from "./Components/Data/FetchFeedbacksData";

function App() {
  const [criteria, setCriteria] = useState<null | string>(null);
  const [rate, setRate] = useState<null | number>(null);
  return (
    <div className="App">
      <Header />
      <div>
        <div className="filter-section">
          <RatingButton ratingValue={1} onClick={setRate} />
          <RatingButton ratingValue={2} onClick={setRate} />
          <RatingButton ratingValue={3} onClick={setRate} />
          <RatingButton ratingValue={4} onClick={setRate} />
          <RatingButton ratingValue={5} onClick={setRate} />
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
          <FetchFeedbacksData criteria={criteria} rate={rate} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
