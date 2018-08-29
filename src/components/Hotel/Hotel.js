import React from 'react';

function Hotel(props) {
  return (
    <div className="hotel">
      <img src='https://react.semantic-ui.com/images/wireframe/image.png' alt="" className="hotel-image" />
      <div className="hotel-description">
        <div className="hotel-name">{props.text}</div>
        <div className="hotel-description">{props.desc}</div>
      </div>
    </div>
  )
}

export default Hotel
