import React, { FC, Fragment } from "react";
import { isMobile } from "./FeedBacksData";
import { Pagination } from "../Pagination/Pagination";

interface props {
  listItems: feedbacks[];
  setPageNumber: (value: number) => void;
  currentPage: number;
}

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
export const DisplayData: FC<props> = (props) => {
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

  const onNext = () => {
    if (
      props.currentPage < Math.floor(props.listItems.length / 10) &&
      props.listItems.length !== 0
    )
      props.setPageNumber(props.currentPage + 1);
  };

  const onPrevious = () => {
    if (props.currentPage > 1 && props.listItems.length !== 0)
      props.setPageNumber(props.currentPage - 1);
  };

  return (
    <Fragment>
      <table className="table-area">
        <thead className="table-header">
          <tr>
            <th>Rating</th>
            <th>Comment</th>
            <th>platform</th>
            <th>Browser</th>
            <th>Device</th>
          </tr>
        </thead>
        <tbody className="table-content">
          {props.listItems
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
                <td>
                  {isMobile(feedback.browser.userAgent) ? "Mobile" : "Desktop"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Pagination
        currentPage={props.currentPage}
        TotalPages={Math.floor(props.listItems.length / 10)}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </Fragment>
  );
};
