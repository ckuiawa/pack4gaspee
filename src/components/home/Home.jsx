import React, {Component} from 'react';

import Links from '../links/Links';
import './Home.css';

class Home extends Component {

  constructor() {
    super();

    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    return [
      {
        url: "http://www.narragansettbsa.org/",
        description: "Boy Scouts Of America Narragansett Council"
      },
      {
        url: "http://www.narragansettbsa.org/openrosters/Calendar.asp",
        description: "Narragansett Council - Calendar of Events"
      },
      {
        url: "https://my.scouting.org/",
        description: "My.Scouting"
      },
      {
        url: "https://www.facebook.com/groups/147111538454",
        description: "Pack 4 Gaspee Plateau Facebook"
      },
      {
        url: "http://blog.scoutingmagazine.org/2015/10/30/what-is-scouting-for-food",
        description: "Popcorn Fundraising"
      },
      {
        url: "http://blog.scoutingmagazine.org/2015/10/30/what-is-scouting-for-food",
        description: "Scouting for Food"
      },
      {
        url: "http://www.narragansettbsa.org/popcorn/39830",
        description: "Popcorn Fundraising"
      },
      {
        url: "http://www.scouting.org/scoutsource/CubScouts/Activities/Adults/bgbanquet.aspx",
        description: "Blue and Gold Banquet"
      },
      {
        url: "http://www.scouting.org/filestore/pdf/512-735_WEB.pdf",
        description: "New Parent Guide"
      },
      {
        url: "http://www.scouting.org/Home/CubScouts/Parents.aspx",
        description: "Parent Information"
      },
      {
        url: "http://pinewoodderby.org/",
        description: "Pinewood Derby"
      }
    ]
  }

  render() {
    return (
      <div>
        <Links links={this.getLinks()} title="Links"></Links>
        <div className="middle-column">
          <h3 className="welcome">Welcome to Pack 4</h3>
          <img className="scout-characters" src="./images/cub_scout_characters.jpg" alt=""></img>
        </div>
      </div>
    );
  }

}

export default Home;
