import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaQuery from 'react-responsive';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class App extends Component 
{
  render5() {
    return (
      <div>
        <Desktop>Desktop or laptop</Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>Mobile</Mobile>
        <Default>Not mobile (desktop or laptop or tablet)</Default>
    </div>
    )
  }

  render3() {
    return (
      <div>
        <div>Device Test!</div>
      <MediaQuery minDeviceWidth={1224}>
        <div>You are a desktop or laptop</div>
        <MediaQuery minDeviceWidth={1824}>
          <div>You also have a huge screen</div>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <div>You are sized like a tablet or mobile phone though</div>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <div>You are a tablet or mobile phone</div>
      </MediaQuery>
      <MediaQuery orientation="portrait">
        <div>You are portrait</div>
      </MediaQuery>
      <MediaQuery orientation="landscape">
        <div>You are landscape</div>
      </MediaQuery>
      <MediaQuery minResolution="2dppx">
        <div>You are retina</div>
      </MediaQuery>
    </div>
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cody's Site (being deployed via circle FINALLY)</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
        {this.render3()}
      </div>
    );
  }
}


export default App;




