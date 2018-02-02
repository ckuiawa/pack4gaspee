import React, {Component} from 'react';

import Lions from './Lions';
import Tigers from './Tigers';
import Wolves from './Wolves';
import Bears from './Bears';
import Webelos from './Webelos';
import ArrowOfLight from './ArrowOfLight';



class OurPack extends Component {

  constructor() {
    super();

    this.state = {
      view: 'OurPack'
    }
  }

  renderDenContent() {

    const { view } = this.state;

    switch (view) {
      case 'OurPack':
        return (
          <image src="/public/images/scout_uniforms.jpg"></image>
        )
        break;
      case 'Lions':
        return (
          <Lions></Lions>
        )
        break;
      case 'Tigers':
        return (
          <Tigers></Tigers>
        )
        break;
      case 'Bears':
        return (
          <Bears></Bears>
        )
        break;
      case 'Wolves':
        return (
          <Wolves></Wolves>
        )
        break;
      case 'Webelos':
        return (
          <Webelos></Webelos>
        )
        break;
      case 'ArrowOfLight':
        return (
          <ArrowOfLight></ArrowOfLight>
        )
        break;
      default:
        return (
          <image src="/public/images/scout_uniforms.jpg"></image>
        )
        break;
    }
  }

  render()
  {
    return (
      <div>
        <span classNae="den-list">
          <ul>
            <li>Lions</li>
            <li>Tigers</li>
            <li>Wolves</li>
            <li>Bears</li>
            <li>Webelos</li>
            <li>Arrow Of Light</li>
          </ul>
        </span>
        <span className="forms">
          <a href="">New Scout Info</a>
          <a href="">Medical Form</a>
          <a href="">Media Release</a>
          <a href="">Uniform Guidelines</a>
          <a href="">Parent Survey</a>
          <a href="">Derby Sponsoship</a>
        </span>
        <div className="content">
        </div>
      </div>
    );
  }

}

export default OurPack;
