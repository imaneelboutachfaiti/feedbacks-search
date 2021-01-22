import { FC } from "react";
import "./Pagination.css";

interface props {
  onPrevious: () => void;
  currentPage: number;
  TotalPages: number;
  onNext: () => void;
}

export const Pagination: FC<props> = (props) => {
  return (
    <div className="pagination-area">
      <button className="pagination-button" onClick={props.onPrevious}>
        previous
      </button>
      <div>
        <span>{props.currentPage}</span>/
        <span>{props.TotalPages !== 0 ? props.TotalPages : "1"}</span>
      </div>
      <button className="pagination-button" onClick={props.onNext}>
        Next
      </button>
    </div>
  );
};
