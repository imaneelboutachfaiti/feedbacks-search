import React from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Input placeholder="Search here!"></Input>
      </div>
      <table className="table-space items">
        <tr>
          <th>Rating</th>
          <th>Comment</th>
          <th>platform</th>
          <th>Browser</th>
          <th>Device</th>
        </tr>
        <tbody>
         
        </tbody>
      </table>
    </div>
  );
}

export default App;
