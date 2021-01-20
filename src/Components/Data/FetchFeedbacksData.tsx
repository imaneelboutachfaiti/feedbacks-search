import React, { FC, Fragment, useEffect, useState } from "react";
import { getDeviceType, isMobile } from "./FeedBacksData";
import "./FeedbackData.css";

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
  criteria: string;
  ratings: number[];
  device: "MOBILE" | "DESKTOP" | null;
  currentPage: number;
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

  let startCount;

  switch (props.currentPage) {
    case 1:
      startCount = 0;
      break;
    case 2:
      startCount = 10;
      break;
    default:
      startCount = (props.currentPage - 1) * 10;
      break;
  }
  const listItems = feedbackData
    .filter((feedback) => {
      const searchCriteria = props.criteria
        ? feedback.comment.includes(props.criteria)
        : true;

      const rating =
        props.ratings.length > 0
          ? props.ratings.includes(feedback.rating)
          : true;

      const deviceType = props.device
        ? props.device === getDeviceType(feedback.browser.userAgent)
        : true;

      return searchCriteria && rating && deviceType;
    })
    .slice(startCount, startCount + 10)
    .map((feedback) => (
      <tr key={feedback.creation_date}>
        <td>
          <button className="rate">{feedback.rating}</button>
        </td>
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
