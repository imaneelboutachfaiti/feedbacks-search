import React, { useEffect, useState } from "react";
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

const FetchFeedbacksData = () => {
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
  return <div>{listItems}</div>;
};

export default FetchFeedbacksData;
