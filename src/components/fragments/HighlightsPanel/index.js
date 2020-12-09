/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/react';
import { root } from './styles';
import { panelContents } from './utils';
import H1 from '../../elements/H1';
import P from '../../elements/P'
import Tile from '../Tile';

class HighlightsPanel extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this._animate);
  }

  _animate = () => {
    const headline = document.getElementById('hl-headline');
    const panels = document.getElementById('panels');
    const top = window.pageYOffset + window.innerHeight;
    const shouldAnimateShow = top > headline.offsetTop;
    const shouldAnimateHide = top < panels.offsetTop;

    if (shouldAnimateHide) {
      headline.style.opacity = 0;
      headline.style.left = '-200px';

      panels.style.opacity = 0;
      panels.style.right = '-200px';
      return;
    }

    if (shouldAnimateShow) {
      headline.style.opacity = 1;
      headline.style.left = 0;

      panels.style.opacity = 1;
      panels.style.right = 0;
      return;
    }
  }

  render() {
    return (
      <div css={root}>
        <div className="headline" id="hl-headline">
          <header>
            <H1>How Can I Help You?</H1>
          </header>
          <P>
            Our work then targeted, best practices outcomes social innovation synergy.
            Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
            program areas scale.
          </P>
        </div>
        <div className="grid-container" id="panels">
          {panelContents.map((item) => (
            <div className="grid-item" key={item.title}>
              <Tile
                desc={item.desc}
                icon={item.icon}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HighlightsPanel;
