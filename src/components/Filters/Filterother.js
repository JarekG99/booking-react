import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


export default class Filterother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      other: []
    };
  }

  render() {
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // attached the `name` attribute correctly. `value` is optional
    return (
      <CheckboxGroup
        checkboxDepth={2} // This is needed to optimize the checkbox group
        name="other"
        className="checkbox"
        value={this.state.other}
        onChange={this.otherChanged}>

        <label><Checkbox value="free cancellation"/>Free cancellation</label>
        <label><Checkbox value="booking without credit card"/>Booking without credit card</label>
        <label><Checkbox value="no prepayment"/>No prepayment</label>
      </CheckboxGroup>
    );
  }

  otherChanged = (newOther) => {
   this.setState({
     other: newOther
   });
 }

};
