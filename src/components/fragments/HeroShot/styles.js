import styled from '@emotion/styled';
import { hexByColor } from '../../../constants/colors';

const root = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
  color: hexByColor.white,
  backgroundColor: hexByColor.darkBlue,
  textAlign: 'center',
  overflowX: 'hidden',
  '& .logo': {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: 40,
    height: 40,
    margin: '15px 20px',
    opacity: 0,
    transition: 'opacity 2s',
  },
  '& .headline-text': {
    marginBottom: 30
  },
  '& .overlay': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    padding: 15,
    boxSizing: 'border-box',

    /** Animation purpose. */
    opacity: 0,
    left: '-200px',
    transition: 'all 1s ease-in'
    /** End of animation purpose. */
  },
};

const HeroImage = styled.img(props => ({
  filter: 'contrast(200%) opacity(35%) saturate(150%) hue-rotate(90deg) brightness(80%)',
  width: props.width || '1920px',
  height: '100vh',
  objectFit: 'cover',
  opacity: 0,
  transition: 'opacity 2s',
}));

export { root, HeroImage };
