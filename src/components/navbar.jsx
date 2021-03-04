import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span>0</span>
      </div>
    );
  }
}

export default Navbar;
