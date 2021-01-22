import React, { FC, Fragment, useEffect, useState } from "react";
import { getDeviceType, isMobile } from "./FeedBacksData";
import "./FeedbackData.css";
import { DisplayData } from "./DisplayData";

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
}

export const FetchFeedbacksData: FC<Props> = (props) => {
  const [feedbackData, setFeedbackData] = useState<feedbacks[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

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
  const listItems = feedbackData.filter((feedback) => {
    const searchCriteria = props.criteria
      ? feedback.comment.includes(props.criteria)
      : true;

    const rating =
      props.ratings.length > 0 ? props.ratings.includes(feedback.rating) : true;

    const deviceType = props.device
      ? props.device === getDeviceType(feedback.browser.userAgent)
      : true;

    return searchCriteria && rating && deviceType;
  });
  return (
    <Fragment>
      <DisplayData
        listItems={listItems}
        setPageNumber={setPageNumber}
        currentPage={pageNumber}
      />
    </Fragment>
  );
};
