import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";
import FetchFeedbacksData from './Components/Data/FetchFeedbacksData'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Input placeholder="Search here!"></Input>
      </div>
      <div className="feedback-element table-space">
        <span>Rating</span>
        <span>Comment</span>
        <span>browser</span>
      </div>
      <div className="advanced-table">
        <FetchFeedbacksData />
      </div>
    </div>
  );
}

export default App;
