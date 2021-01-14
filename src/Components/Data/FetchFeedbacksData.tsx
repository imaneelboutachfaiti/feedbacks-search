import React, { FC, Fragment, useEffect, useState } from "react";
import { formatWithOptions } from "util";
import { isMobile } from "./FeedBacksData";
import { containes } from "./FeedBacksData";

interface feedbacks {
  rating: number;
  comment: string;
  device: string;
  platform: string;
  computed_browser: computed_browser;
  browser: browser;
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
  const listItems = feedbackData.map((feedback) =>
    containes(feedback.comment, props.criteria) ? (
      <tr className="table-space">
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
    ) : (
      ""
    )
  );
  return <Fragment>{listItems}</Fragment>;
};

export default FetchFeedbacksData;
