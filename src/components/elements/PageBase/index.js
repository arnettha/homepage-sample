/** @jsx jsx */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';
import { root } from './styles';

class PageBase extends Component {
  componentDidMount() {
    document.title = 'Arnettha Septinez | Cermati.com Front-end Developer Entry Test';
  }

  render() {
    return (
      <div css={root}>
        {this.props.children}
      </div>
    );
  }
}

export default PageBase;

PageBase.propTypes = {
  children: PropTypes.node,
}

PageBase.defaultProps = {
  children: null,
}
