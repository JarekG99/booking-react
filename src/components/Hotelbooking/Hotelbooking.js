import React from 'react';
import Select from 'react-select';
import { Calendar1, Calendar2 } from './Datepicker';
import Dropdown from 'react-dropdown';
import Map from './Map';
import Filterprice from '../Filters/Filterprice';
import Filterstars from '../Filters/Filterstars';
import Filterother from '../Filters/Filterother';
import HotelsList from "../Hotel/HotelsList";


import 'react-dropdown/style.css';


import calendar from '../photos/calendar.svg'
import user from '../photos/user.svg'
import './Hotelbooking.css';

// const propTypes = {
//   someProp: elementType,
// };

const options = [
  { value: 'warsaw', label:'Warsaw',
    hotels: [{name:"Europejski", description: "description"}, {name:"Bristol", description: "description"}, {name:"Novotel", description: "description", description: "description"}, {name:"Ibis", description: "description"}, {name:"Sheraton", description: "description"}] },
  { value: 'berlin', label: 'Berlin',
    hotels: [{name:"Hampton by Hilton", description: "description 44"}, {name:"Mariott", description: "description 55"}, {name:"Berlin the Wall", description: "description 66"}, {name:"InterContinental Berlin", description: "description 77"} ]},
  { value: 'paris',  label: 'Paris',
    hotels:[{name:"Ritz", description: "description 11"}, {name:"President", description: "description 22"}, {name:"Eiffel", description: "description 33"}, {name:"Le Royal", description: "description 44"}, {name:"Castille Paris", description: "description 55"}] },
  { value: 'london', label: 'London',
    hotels:[{name:"NH London Kensington", description: "description 11"}, {name:"The Mandeville Hotel", description: "description 22"}, {name:"Grange St Paul's", description: "description 33"}, {name:"Grange Tower Bridge", description: "description 44"} ] },
  { value: 'rome',  label: 'Rome',
    hotels: [{name: "Hilton Garden Inn Rome ClaridgeHotel", description: "description 11"}, {name:"Dei Borgia", description: "description 22"}, {name:"Hotel San Anselmo", description: "description 33"}, {name:"Albergo del Senato", description: "description 44"}, {name:"Majestic Rome", description: "description 55"}] },
  { value: 'new york', label: 'New York',
    hotels:[{name:"Archer Hotel New York", description: "something"}, {name:"The Roxy Hotel", description: "description 11"}, {name:"Fitzpatrick Manhattan", description: "description"}, {name:"Hampton Inn Manhattan Downtown", description: "description"}, {name:"Riu Plaza New York Times Sq", description: "description"}]  },
  { value: 'toronto', label: 'Toronto',
    hotels:[{name:"Chelsea Hotel Toronto"}, {name:"The Adelaide Hotel Toronto", description: "description 11"}, {name:"Fairmont Royal York", description: "description 22"}, {name:"Delta Hotels Toronto", description: "description 33"}]  },
];

const roomoptions = [
  { value: '0', label: '0' },
  { value: '1', label: '1'},
  { value: '2', label: '2'},
  { value: '3', label: '3'},
];

const defaultAdultsoption = roomoptions[2];
const defaultRoomoption = roomoptions[1];
const defaultChildrenoption = roomoptions[0];


export default class Hotelbooking extends React.Component {
  constructor(props) {
   super(props);
     this.state = {
         selectedOption: options[5],
      }
      // this.selectedOption=this.selectedOption.bind(this);
    }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    // console.log('Option:', selectedOption.hotels)

  }
  render() {
    const { selectedOption =[]} = this.state;

    return (
      <div className="app-main">
        <div className="option">
          <Select
            value={selectedOption}
            className="city"
            onChange={this.handleChange}
            options={options}
          />

          <div className="dates">
            <div>
            <img src={calendar} className="calendar" alt="cal."/>
            </div>
            <Calendar1 />
            <Calendar2 />
          </div>
          <div className="rooms">
              <img src={user} className="user" alt="user"/>
              <div className="room-occ">
                <div className="center">Room</div><Dropdown options={roomoptions} className="roomoptions" onChange={this._onSelect} value={defaultRoomoption} placeholder="Select an option" />
              </div>
              <div className="room-occ">
                <div className="center">Adults</div><Dropdown options={roomoptions} className="roomoptions" onChange={this._onSelect} value={defaultAdultsoption} placeholder="Select an option" />
              </div>
              <div className="room-occ">
                <div className="center">Children</div><Dropdown options={roomoptions} className="roomoptions" onChange={this._onSelect} value={defaultChildrenoption} placeholder="Select an option" />
              </div>
            </div>
          </div>
          <div className="main">
            <div className="main-left">
              <div className="map">
                <Map />
              </div>
                <div className="filters">
                  <div className="filters-title">
                    <span>Filter by:</span>
                  </div>
                    <div className="filter-options">
                      <span> Your price level:</span>
                      <Filterprice />
                      <span> Star Rating:</span>
                      <Filterstars />
                      <span> Free cancellation & more:</span>
                      <Filterother />

                  </div>
                </div>
            </div>
            <div className="main-right">
              <div className="hotel-top">
                <div className="hotel-top-option"><span>Our choice</span></div>
                <div className="hotel-top-option"><span>Distance from...</span></div>
                <div className="hotel-top-option"><span>Lowest price</span></div>
                <div className="hotel-top-option"><span>Customer review</span></div>
                <div className="hotel-top-option"><span>Stars</span></div>
              </div>
              <HotelsList hotels={selectedOption.hotels}  />
            </div>
          </div>
        </div>
    );
  }
}
