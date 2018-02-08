import React, {Component} from 'react';
import propTypes from 'prop-types';

import './Links.css';

class Links extends Component {


  render() {

    const { links } = this.props;

    const renderedLinks = [];
    links.forEach( (link, index) => {
      renderedLinks.push (
        <li className="link-item" key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer" >{link.description}</a>
        </li>
      )
    })

    return (
      <div>
        <div className="links">
          <h3 className="title">{this.props.title}</h3>
          <ul className="links-list">
            {renderedLinks}
          </ul>
        </div>
      </div>
    );
  }

}

Links.propTypes = {
  links: propTypes.Array,
  title: propTypes.String
}

export default Links;
