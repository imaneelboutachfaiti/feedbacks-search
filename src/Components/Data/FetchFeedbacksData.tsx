import React, { FC, Fragment, useEffect, useState } from "react";
import { isMobile } from "./FeedBacksData";

interface feedbacks {
  rating: number;
  comment: string;
  device: string;
  platform: string;
  computed_browser: computed_browser;
  browser: browser;
  public_id: string;
  creation_date: number;
}
interface computed_browser {
  Platform: string;
  Browser: string;
  Version: string;
}

interface browser {
  userAgent: string;
}

interface Props {
  criteria: null | string;
  ratings: number[];
  device :string;
}
const FetchFeedbacksData: FC<Props> = (props) => {
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
  const criteriaFilter = props.criteria === null ? "" : props.criteria;
  const listItems = feedbackData
    .filter(
      (feedback) =>
        feedback.comment.includes(criteriaFilter) &&
        (props.ratings?.includes(feedback.rating) || props.ratings.length === 0) && 
      ( isMobile(props.device)? feedback.browser.userAgent.includes(props.device) : (!feedback.browser.userAgent.includes(props.device)) 
    ) || props.device ==='')
    .map((feedback) => (
      <tr key={feedback.creation_date} className="table-space">
        <td>{feedback.rating}</td>
        <td>{feedback.comment}</td>
        <td>{feedback.computed_browser.Platform}</td>
        <td>
          {feedback.computed_browser.Browser +
            " " +
            feedback.computed_browser.Version}
        </td>
        <td>{isMobile(feedback.browser.userAgent) ? "Mobile" : "Desktop"}</td>
      </tr>
    ));

  return <Fragment>{listItems}</Fragment>;
};

export default FetchFeedbacksData;
