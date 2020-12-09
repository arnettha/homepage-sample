/** @jsx jsx */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';
import { root } from './styles';
import Button from '../../elements/Button';
import P from '../../elements/P';
import A from '../../elements/A';

class NotificationPanel extends Component {
  render() {
    const { id, onClose } = this.props;
    return (
      <div id={id} css={root}>
        <div className="content">
          <div className="text">
            <P lineHeight="18px" size={13}>
              By accessing and using this website, you acknowledge that you have read and
              understand our <A>Cookie Policy</A>, <A>Privacy Policy</A>,
              and our <A>Terms of Service</A>.
            </P>
          </div>
          <Button
            color="secondary"
            size="medium"
            onClick={onClose}
          >
            Got it
          </Button>
        </div>
      </div>
    );
  }
}

export default NotificationPanel;

NotificationPanel.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func,
}

NotificationPanel.defaultProps = {
  id: '',
  onClose: null,
}
