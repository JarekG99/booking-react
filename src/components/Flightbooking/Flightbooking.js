import React from 'react';

class Flight extends React.Component {
  render() {
    return (
      <div {...this.props}>
        Flights booking coming soon!
      </div>
    );
  }
}

export default Flight;
