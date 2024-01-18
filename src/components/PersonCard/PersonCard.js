import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PersonCard.css";



export default class PersonCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    return (
      <div className="PersonCard">
      <h2>{ firstName }, { lastName }</h2>
       <p>Age : { age }</p>
       <p>Hair Color : { hairColor }</p>
    </div>
    );
  }
}


PersonCard.propTypes = {};

PersonCard.defaultProps = {};

