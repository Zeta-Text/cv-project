import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Basic from './components/Basic';
import Work from './components/Work';
import Education from './components/Education'

class App extends Component {

  constructor() {
    super();

  }


  render() {

  return (
    <div className="sheet">
      <div className="header">
        <h2>Firstname Initial Lastname</h2>
      </div>
      <div className="container1">
        <div className="basicInfo">
            <Basic />
        </div>
        <div className="container2">
          <div className="workInfo">
            <Work />
          </div>
          <div className="educationInfo">
            <Education />
          </div>
        </div>
      </div>


    </div>  
  );
  }
}

export default App;
