import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


export default class Filterprice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: []
    };
  }

  render() {
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // attached the `name` attribute correctly. `value` is optional
    return (
      <CheckboxGroup
        checkboxDepth={2} // This is needed to optimize the checkbox group
        name="price"
        className="checkbox"
        value={this.state.price}
        onChange={this.priceChanged}>

        <label><Checkbox value="0-50 per night"/> 0-50 per night</label>
        <label><Checkbox value="50-100 per night"/> 50-100 per night</label>
        <label><Checkbox value="100-200 per night"/> 100-200 per night</label>
        <label><Checkbox value="200-300 per night"/> 200-300 per night</label>
        <label><Checkbox value="300 + per night"/> 300 + per night</label>
      </CheckboxGroup>
    );
  }

  priceChanged = (newPrice) => {
   this.setState({
     price: newPrice
   });
 }

};
