import React, { Component } from 'react';
import HeroShot from '../../components/fragments/HeroShot';
import HighlightsPanel from '../../components/fragments/HighlightsPanel';

class Home extends Component {
  render() {
    return (
      <div>
        <HeroShot />
        <HighlightsPanel />
      </div>
    );
  }
}

export default Home;