import React, {Component} from 'react';

import './Popcorn.css';

class Popcorn extends Component {

  render() {
    return (
      <div className="popcorn-sales">
        <div className="title">
          <p>
            Popcorn Show and Sell Signups
          </p>
        </div>
        <p>
          Sign up for the Show and Sells here. Click on any of the Show and Sell dates in the calendar for time and location.
        </p>
        <div>
          http://www.signupgenius.com/go/4090f4aa9a92ba7fa7-popcorn1
        </div>
        <img src="images/popcorn-flyer-template-2017-1" alt=""/>
      </div>
    );
  }

}

export default Popcorn;
