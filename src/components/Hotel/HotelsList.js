import React from 'react'
import Hotel from './Hotel'

import './Hotel.css';

export default class HotelsList extends React.Component {
  constructor(props) {
   super(props);
     this.state = {
         hotels: [],

      }
      // this.selectedOption=this.selectedOption.bind(this);
    }

  render() {  // console.log('Option:', this.props.hotels)
    return (
      <div className="hotel-list">
        {this.props.hotels.map((hotel, index) => {
          return (
            <Hotel
              hotels={this.props.selectedOption}
              key={index}
              text={hotel.name}
              desc={hotel.description}

            />
            )
          })
        }
      </div>
    )
  }
}
