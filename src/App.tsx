import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";

interface feedbacks {
  rating: number;
  comment: string;
  device: string;
  platform: string;
  browser: browser;
}
interface browser {
  appCodeName: string;
}

function App() {
  const [feedbackData, setFeedbackData] = useState<feedbacks[]>([]);
  useEffect(() => {
    FetchFeedbacks();
  }, []);
  const FetchFeedbacks = async () => {
    const response = await fetch(
      "https://static.usabilla.com/recruitment/apidemo.json"
    );
    const jsonData = await response.json();
    setFeedbackData(jsonData.items);
  };
  const listItems = feedbackData.map((feedback) => (
    <div className="feedback-element">
      <span>{feedback.rating}</span>
      <span>{feedback.comment}</span>
      <span>{feedback.browser.appCodeName}</span>
    </div>
  ));
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Input placeholder="Search here!"></Input>
      </div>
      <div className="feedback-element table-space">
        <span >Rating</span>
        <span>Comment</span>
        <span>browser</span>
      </div>
      <div className="advanced-table">{listItems}</div>
    </div>
  );
}

export default App;
