/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/react';
import { root } from './styles';

class Footer extends Component {
  render() {
    return(
      <div css={root}>
        <div className="footer-text">© 2020 Arnettha Septinez. All rights reserved.​</div>
      </div>
    );
  }
}

export default Footer;
