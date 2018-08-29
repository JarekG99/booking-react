import React from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


export class Calendar1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      date: date
    });
  }

  render() {
    return <Datepicker
        className="datepicker"
        selected={this.state.date}
        onChange={this.handleChange}
        dateFormat="DD/MM/YYYY"
        placeholderText="Arr. date"
        isClearable={false}
        monthsShown={2}
    />;
  }
}

export class Calendar2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      date: date
    });
  }

  render() {
    return <Datepicker
        className="datepicker"
        selected={this.state.date}
        onChange={this.handleChange}
        dateFormat="DD/MM/YYYY"
        placeholderText="Dep. date"
        isClearable={false}
        monthsShown={2}
    />;
  }
}
