import React, {Component} from 'react';

import Lions from './Lions';
import Tigers from './Tigers';
import Wolves from './Wolves';
import Bears from './Bears';
import Webelos from './Webelos';
import ArrowOfLight from './ArrowOfLight';

import './OurPack.css';
import Leadership from "./Leadership";

class OurPack extends Component {

  constructor() {
    super();

    this.state = {
      view: 'OurPack'
    }

    this.denItemClicked = this.denItemClicked.bind(this);
    this.renderOurPackPage = this.renderOurPackPage.bind(this);

  }

  renderDenContent() {

    const { view } = this.state;

    switch (view) {
      case 'Lions':
        return (
          <Lions/>
        )
      case 'Tigers':
        return (
          <Tigers/>
        )
      case 'Bears':
        return (
          <Bears/>
        )
      case 'Wolves':
        return (
          <Wolves/>
        )
      case 'Webelos':
        return (
          <Webelos/>
        )
      case 'Arrow Of Light':
        return (
          <ArrowOfLight/>
        )
      case 'Leadership':
        return (
          <Leadership/>
        )
      default:
        return this.renderOurPackPage()
    }
  }

  denItemClicked(event) {
    const source = event.target.textContent;
    this.setState( {
      view: source
    })
  }

  renderOurPackPage() {
    return (
      <div className="our-pack">
        <h2>Class A Uniform</h2>
        <img src="/images/scout_uniforms.jpg" alt=""></img>
        <h2>Advancements</h2>
        <img src="/images/cubscoutingadvcmt.jpg" alt=""></img>
      </div>
    )
  }

  render()
  {
    return (
      <div>
        <span className="den-list">
          <ul>
            <li onClick={this.denItemClicked}>Lions</li>
            <li onClick={this.denItemClicked}>Tigers</li>
            <li onClick={this.denItemClicked}>Wolves</li>
            <li onClick={this.denItemClicked}>Bears</li>
            <li onClick={this.denItemClicked}>Webelos</li>
            <li onClick={this.denItemClicked}>Arrow Of Light</li>
            <li onClick={this.denItemClicked}>Leadership</li>
          </ul>
        </span>
        {this.renderDenContent()}
        <span className="forms">
          <span className="forms-title">Forms</span>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">New Scout Info</a>
          </div>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">Medical Form</a>
          </div>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">Media Release</a>
          </div>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">Uniform Guidelines</a>
          </div>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">Parent Survey</a>
          </div>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">Derby Sponsoship</a>
          </div>
        </span>
        <div className="content">
        </div>
      </div>
    );
  }

}

export default OurPack;
