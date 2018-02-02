import React, { Component } from 'react';
import './MenuManager.css';

import Home from '../home/Home';
import OurPack from '../ourpack/OurPack';
import HikeClub from '../hikeclub/HikeClub';
import Links from '../links/Links';
import Gallery from '../gallery/Gallery';
import Join from '../join/Join';
import Calendar from '../calendar/Calendar';
import Popcorn from '../popcorn/Popcorn';
import Contact from '../contact/Contact';

class MenuManager extends Component {

  constructor() {
    super();

    this.menuNames = ['Home','Our Pack', 'Calendar', 'Gallery', 'Popcorn','Hike Club', 'Contact', 'Links', 'Join'];

    this.state = {
      activeView: this.menuNames[0]
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.getMenuItem = this.getMenuItem.bind(this);
  }

  handleMenuClick(event) {
    const menuItem = event.target.textContent;
    this.setState({
      activeView: menuItem
    })
  }

  getMenuItem(name) {
    switch (name) {
      case 'Our Pack':
        return (
          <OurPack></OurPack>
        )
        break;
      case 'Hike Club':
        return (
          <HikeClub/>
        )
        break;
      case 'Join':
        return (
          <Join></Join>
        )
        break;
      case 'Gallery':
        return (
          <Gallery></Gallery>
        )
        break;
      case 'Contact':
        return (
          <Contact></Contact>
        )
        break;
      case 'Links':
        return (
          <Links></Links>
        )
        break;
      case 'Popcorn':
        return (
          <Popcorn></Popcorn>
        )
        break;
      case 'Calendar':
        return (
          <Calendar></Calendar>
        )
        break;
      default:
        return (
          <Home></Home>
        )
    };
  }

  render() {

    const itemContent = this.getMenuItem(this.state.activeView);

    const buttons = this.menuNames.map( (menuName) => {
      return (
        <button className="menu-button" onClick={this.handleMenuClick}>{menuName}</button>
      )


    })


    return (
      <div className="MenuManager">
        {buttons}
        <div className="content-area">{itemContent}</div>
      </div>
    );
  }

}

export default MenuManager;
