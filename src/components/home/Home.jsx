import React, {Component} from 'react';

import './Home.css';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="links">
          <h3 className="title">Links</h3>
          <ul className="link-list">
            <li className="link">
              <a href="http://www.narragansettbsa.org/" target="_blank">Boy Scouts Of America Narragansett Council  </a>
            </li>
            <li className="link">
              <a href="http://www.narragansettbsa.org/openrosters/Calendar.asp" target="_blank">Narragansett Council - Calendar of Events</a>
            </li>
            <li className="link">
              <a href="https://my.scouting.org/" target="_blank">My.Scouting</a>
            </li>
            <li className="link">
              <a href="https://www.facebook.com/groups/147111538454" target="_blank">Pack 4 Gaspee Plateau Facebook</a>
            </li>
            <li className="link">
              <a href="http://blog.scoutingmagazine.org/2015/10/30/what-is-scouting-for-food" target="_blank">Scouting for Food</a>
            </li>
            <li className="link">
              <a href="http://www.narragansettbsa.org/popcorn/39830" target="_blank">Popcorn Fundraising</a>
            </li>
            <li className="link">
              <a href="http://www.scouting.org/scoutsource/CubScouts/Activities/Adults/bgbanquet.aspx" target="_blank">Blue and Gold Banquet</a>
            </li>
            <li className="link">
              <a href="http://www.scouting.org/filestore/pdf/512-735_WEB.pdf" target="_blank">New Parent Guide</a>
            </li>
            <li className="link">
              <a href="http://www.scouting.org/Home/CubScouts/Parents.aspx" target="_blank">Parent Information</a>
            </li>
            <li className="link">
              <a href="http://pinewoodderby.org/" target="_blank">Pinewood Derby</a>
            </li>
          </ul>
        </div>
        <div className="middle-column">
          <h3 className="welcome">Welcome to Pack 4</h3>
          <img className="scout-characters" src="./images/cub_scout_characters.jpg"></img>
        </div>
      </div>
    );
  }

}

export default Home;
