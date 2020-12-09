/** @jsx jsx */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';
import { root } from './styles';
import Button from '../../elements/Button';
import H2 from '../../elements/H2';
import Textfield from '../../elements/Textfield';

class NewsletterPanel extends Component {
  render() {
    const { id, onClose } = this.props;
    return (
      <div id={id} css={root}>
        <div className="row">
          <div className="close" onClick={onClose}>×</div>
        </div>
        <div className="row">
          <H2>Get latest updates in web technologies</H2>
          <small>
            I write articles related to web technologies, such as design trends, development
            tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
            them all.
          </small>
        </div>
        <div className="subscribe">
          <Textfield
            className="textfield"
            placeholder="Email address"
            type="email"
          />
          <Button
            expandable
            color="tertiary"
            size="small"
          >
            Count me in!
          </Button>
        </div>
      </div>
    );
  }
}

export default NewsletterPanel;

NewsletterPanel.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func,
}

NewsletterPanel.defaultProps = {
  id: '',
  onClose: null,
}
