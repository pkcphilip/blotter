import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <thead>
        <th>Time</th>
        <th>Side</th>
        <th>OrderType</th>
        <th>CcyPair</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Status</th>
      </thead>
    );
  }
}

export default Header;
