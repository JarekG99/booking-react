import React from 'react';

class Car extends React.Component {
  render() {
    return (
      <div {...this.props}>
        Car booking coming soon!

      </div>
    );
  }
}

export default Car;
