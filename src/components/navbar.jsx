import React, { Component } from 'react';


class NavBar extends Component {


  render() {
    return (
      <div>

      <nav className="navbar navbar-dark bg-dark sticky-top">
      <a className="navbar-brand" href="#">GPA Calculator</a>
      <span className="badge badge-pill badge-secondary">{this.props.final}</span>
      </nav>
      </div>
    );
  }

}

export default NavBar;
