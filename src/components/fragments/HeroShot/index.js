/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/react';
import { root, HeroImage } from './styles';
import H1 from '../../elements/H1';
import H2 from '../../elements/H2';
import P from '../../elements/P';
import Button from '../../elements/Button';
import BgImage from '../../../assets/work-desk__dustin-lee.jpg';
import Logo from '../../../assets/y-logo-white.png';

class HeroShot extends Component {
  state = {
    overlayHeight: 0,
    imageWidthInitial: '1920px',
    imageWidth: '1920px',
  };

  componentDidMount() {
    this._initialize();
    window.addEventListener('resize', this._updateDimension());
  }

  _initialize = () => {
    const headline = document.getElementById('headline');
    setTimeout(() => {
      headline.style.opacity = 1;
      headline.style.left = 0;
    }, 1000);
  }

  _updateDimension = (isOnLoad=false) => () => {
    const { imageWidthInitial } = this.state;
    const innerWidth = window.innerWidth || '1920px';
    const heroImage = document.getElementById('hero-image');
    if (isOnLoad) {
      this.setState({
        imageWidthInitial: `${innerWidth}px`,
        imageWidth: `${innerWidth}px`
      });
      heroImage.style.opacity = 1;
      return;
    }

    if (innerWidth > parseInt(imageWidthInitial.replace('px', ''))) {
      this.setState({ imageWidth: `${innerWidth}px` });
    } else {
      this.setState({ imageWidth: imageWidthInitial });
    }
  }

  _loadLogo = () => {
    const logo = document.getElementById('site-logo');
    logo.style.opacity = 1;
  }

  render() {
    const { imageWidth } = this.state;
    return (
      <div css={root}>
        <header>
          <img className="logo" id="site-logo" onLoad={this._loadLogo} src={Logo} />
        </header>
        <div id="headline" className="overlay">
          <div className="headline-text">
            <H1>Hello! I&apos;m Arnettha Septinez</H1>
            <H2>Consult, Design, and Develop Websites</H2>
            <P>Have something great in mind? Feel free to contact me.</P>
            <P>I&apos;ll help you to make it happen.</P>
          </div>
          <Button
            color="primary"
            size="large"
          >
            LET&apos;S MAKE CONTACT
          </Button>
        </div>
        <HeroImage id="hero-image" onLoad={this._updateDimension(true)} src={BgImage} width={imageWidth} />
      </div>
    );
  }
}

export default HeroShot;
