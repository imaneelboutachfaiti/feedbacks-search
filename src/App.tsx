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
      <table className="table-space items">
        <th>Rating</th>
        <th>Comment</th>
        <th>platform</th>
        <th>Browser</th>
        <th>Device</th>
      </table>
      
        <FetchFeedbacksData />
    </div>
  );
}

export default App;
