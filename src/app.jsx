import React, { Component } from "react";
import "./App.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class app extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    totalCount: 0,
  };
  handleUpdate = (habits) => {
    this.setState({ habits });
    let totalCount = 0;
    habits.forEach((item) => {
      if (item.count > 0) {
        totalCount++;
      }
    });
    this.setState({ totalCount });
  };
  handleResetClick = (event) => {
    // console.log(event);
    // let count = 0;
    // this.state.habits.forEach((item) => {
    //   this.setState({ count: 0 });
    // });
    const habits = [...this.state.habits];
    habits.forEach((item) => {
      item.count = 0;
    });
    this.setState({ habits });
  };

  handleInputBtnClick = (event) => {
    const input = document.querySelector("input");
    const inputValue = input.value;
    input.value = "";
    let habits = [...this.state.habits];
    let habitId = new Date().getTime();
    habits.push({ id: habitId, name: inputValue, count: 0 });
    this.setState({ habits });
    console.log(this.state.habits);
  };
  render() {
    return (
      <>
        <Navbar habits totalCount={this.state.totalCount} />
        <input type="text" placeholder="Habit" />
        <button onClick={this.handleInputBtnClick}>Add</button>
        <Habits habits={this.state.habits} onUpdate={this.handleUpdate} />
        <button onClick={this.handleResetClick}>Reset All</button>
      </>
    );
  }
}

export default app;
