import { FC } from "react";
import "./Pagination.css";

interface props {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const Pagination: FC<props> = (props) => {
  return (
    <div className="pagination-area">
      <button className="pagination-button" onClick={props.onPrevious}>
        previous
      </button>
      <div>
        <span>{props.currentPage}</span>/<span>{props.totalPages}</span>
      </div>
      <button className="pagination-button" onClick={props.onNext}>
        Next
      </button>
    </div>
  );
};
