import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


export default class Filterstars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: []
    };
  }

  render() {
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // attached the `name` attribute correctly. `value` is optional
    return (
      <CheckboxGroup
        checkboxDepth={2} // This is needed to optimize the checkbox group
        name="stars"
        className="checkbox"
        value={this.state.stars}
        onChange={this.starsChanged}>

        <label><Checkbox value="**"/> basic <span style={{ color: 'gold' }}> * *</span></label>
        <label><Checkbox value="***"/> Qulity comfort <span style={{ color: 'gold' }}> * * *</span></label>
        <label><Checkbox value="****"/> Luxury <span style={{ color: 'gold', width: '20px' }}> * * * *</span></label>
        <label><Checkbox value="*****"/> Best of the best <span style={{ color: 'gold' }}> * * * * *</span></label>
        <label><Checkbox value="unrated"/> Unrated</label>
      </CheckboxGroup>
    );
  }

  starsChanged = (newStars) => {
   this.setState({
     stars: newStars
   });
 }

};
