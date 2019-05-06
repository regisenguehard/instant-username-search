import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    let { page } = this.props;
    if (typeof page === "undefined") {
      page = ""
    }

    return (
      <footer className='footer'>
        <div className='pull-left'>
          <ul>
            <li><a href="https://github.com/umutcanbolat/instant-username-search/blob/master/LICENSE">{'© ' + new Date().getFullYear() + ' GPL 3.0'}</a></li>
            <li><a href="https://github.com/umutcanbolat/instant-username-search/">
              <FormattedMessage id="app.contribute"
                defaultMessage="Fork on GitHub" />
            </a></li>

          </ul>
        </div>
        <div className='languages pull-right'>
          <ul>
            <li><Link to={"/ca/" + page}>Català</Link></li>
            <li><Link to={"/de/" + page}>Deutsch</Link></li>
            <li><Link to={"/en/" + page}>English</Link></li>
            <li><Link to={"/es/" + page}>Español</Link></li>
            <li><Link to={"/tr/" + page}>Türkçe</Link></li>
          </ul>
        </div>
        <div className='coffee'>
          <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/1ulP4IGFm">
            <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee!" />
            <span>
              <FormattedMessage id="app.coffee"
                defaultMessage="Buy me a coffee" />
            </span>
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;