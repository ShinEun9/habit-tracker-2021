import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span>{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
