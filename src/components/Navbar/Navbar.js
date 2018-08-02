import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-dark bg-primary">
        <a className="navbar-brand" href="#!">The Many Roles of Dave Chappelle</a>
        Score: {this.props.score}
        <br />
        Top Score: {this.props.topScore}
      </nav>
    );
  }
}

export default Navbar;
