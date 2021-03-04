import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  //   state = {
  //     habits: [
  //       { id: 1, name: "Reading", count: 0 },
  //       { id: 2, name: "Running", count: 0 },
  //       { id: 3, name: "Coding", count: 0 },
  //     ],
  //   };
  handleIncrement = (habit) => {
    const habits = [...this.props.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.props.onUpdate(habits);
  };
  handleDecrement = (habit) => {
    const habits = [...this.props.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.props.onUpdate(habits);
  };

  handleDelete = (habit) => {
    const habits = this.props.habits.filter((item) => item.id !== habit.id);
    this.props.onUpdate(habits);
  };

  render() {
    // console.log(this.props);
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
