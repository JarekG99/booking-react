import React from 'react';
import logo from '../photos/logo.svg';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import Dropdown from 'react-dropdown';
import ReactModalLogin from 'react-modal-login';
// import {facebookConfig, googleConfig} from "./social-config";
import 'react-dropdown/style.css';


import './Header.css';

const options = ['PLN', 'USD', 'EUR', 'GBP'];
const defaultOption = options[1];



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      loading: false,
      error: null
    };
  }

 //  openModal() {
 //    this.setState({
 //      showModal: true,
 //    });
 //  }
 //
 //  closeModal() {
 //    this.setState({
 //      showModal: false,
 //      error: null
 //    });
 //  }
 //
 //  onLoginSuccess(method, response) {
 //    console.log('logged successfully with ' + method);
 //  }
 //
 //  onLoginFail(method, response) {
 //    console.log('logging failed with ' + method);
 //    this.setState({
 //      error: response
 //    })
 //  }
 //
 //  startLoading() {
 //   this.setState({
 //     loading: true
 //   })
 // }
 //
 // finishLoading() {
 //   this.setState({
 //     loading: false
 //   })
 // }
 //
 // afterTabsChange() {
 //   this.setState({
 //     error: null
 //   });
 // }

  render() {
    return (

      <header className="App-header">

        <div className="Header-top">
          <div className="Header-title">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Booking app.</h1>
          </div>
          <div className="Header-options">
            <ReactFlagsSelect
               defaultCountry="US"
               countries={["PL", "US", "GB", "FR","DE","IT"]}
               customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}}
               placeholder="Select Language"
               showSelectedLabel={false}
               selectedSize={25}
               optionsSize={16}
               alignOptions="left"

            />
            <Dropdown
              options={options}
              onChange={this._onSelect}
              className="button"
              value={defaultOption}
              placeholder="Select an option"
            />
            <button className="button" onClick={() => this.openModal()}>
              Register
            </button>

            {/* <ReactModalLogin
               visible={this.state.showModal}
               onCloseModal={this.closeModal.bind(this)}
               loading={this.state.loading}
               error={this.state.error}
               tabs={{
                 afterChange: this.afterTabsChange.bind(this)
               }}
               loginError={{
                 label: "Couldn't sign in, please try again."
               }}
               registerError={{
                 label: "Couldn't sign up, please try again."
               }}
               startLoading={this.startLoading.bind(this)}
               finishLoading={this.finishLoading.bind(this)}
               providers={{
                 facebook: {
                   // config: facebookConfig,
                   onLoginSuccess: this.onLoginSuccess.bind(this),
                   onLoginFail: this.onLoginFail.bind(this),
                   label: "Continue with Facebook"
                 },
                 google: {
                   // config: googleConfig,
                   onLoginSuccess: this.onLoginSuccess.bind(this),
                   onLoginFail: this.onLoginFail.bind(this),
                   label: "Continue with Google"
                 }
               }}
             />*/}
          </div>
        </div>
      </header>
      );
    }
  }

  export default Header;
