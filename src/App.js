import React, { Component } from 'react';
import  Header  from './components/Header/Header';
import  Hotelbooking  from './components/Hotelbooking/Hotelbooking';
import  Flightbooking  from './components/Flightbooking/Flightbooking';
import  Carbooking from './components/Carbooking/Carbooking';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
     this.state = {
       showHotelbooking: true,
       showFlightbooking: false,
       showCarbooking: false
    };
     this.handleClick = this.handleClick.bind(this);
  }

    handleClick = function() {
      if(this.state.showHotelbooking) {
       this.setState({
         showHotelbooking: !this.state.showHotelbooking,
         showFlightbooking: !this.state.showFlightbooking,
         // showHotelbooking: true,
         // showFlightbooking: false,
         // showCarbooking: false
        });
       }
       // handleClick = (flight) => {
      if(this.state.showFlightbooking) {
       this.setState({
         showFlightbooking: !this.state.showFlightbooking,
         showCarbooking: !this.state.showCarbooking,
         // showHotelbooking: false,
         // showFlightbooking: true,
         // showCarbooking: false
        });
      }
      // handleClick= (car) => {
      if(this.state.showCarbooking) {
         this.setState({
          showCarbooking: !this.state.showCarbooking,
          showHotelbooking: !this.state.showHotelbooking,
          // showHotelbooking: false,
          // showFlightbooking: false,
          // showCarbooking: true
        });
      }
    }


  // selectOption(e) {
  //   this.setState ({ option: e.target.title })
  // }


  render() { console.log(this.state);

    return (
      <div className="App">
        <Header />

        <div className="Header-bottom">
          <button className="button1" name="hotel" onClick={() => this.handleClick('hotel')}>Hotel</button>
          <button className="button1" name="flight" onClick={() => this.handleClick('flight')}>Flight</button>
          <button className="button1" name="car" onClick={() => this.handleClick('car')}>Car</button>
        </div>
        <div>
          {this.state.showHotelbooking ? <Hotelbooking /> : null}
          {this.state.showFlightbooking ? <Flightbooking /> : null}
          {this.state.showCarbooking ? <Carbooking /> : null}
        </div>
      </div>
    );
  }
}

export default App;
