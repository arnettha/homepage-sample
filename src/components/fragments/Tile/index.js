/** @jsx jsx */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';
import { root } from './styles';
import H3 from '../../elements/H3';
import Icon from '../../elements/Icon';

class Tile extends Component {
  render() {
    const { title, desc, icon } = this.props;
    return (
      <div css={root}>
        <div className="head">
          <H3>{title}</H3>
          <Icon icon={icon} />
        </div>
        <div className="content">
          <small>{desc}</small>
        </div>
      </div>
    );
  }
}

export default Tile;

Tile.propTypes = {
  desc: PropTypes.string,
  icon: PropTypes.object,
  title: PropTypes.string,
};

Tile.defaultProps = {
  desc: '',
  icon: {},
  title: ''
};
