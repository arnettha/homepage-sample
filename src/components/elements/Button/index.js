import styled from '@emotion/styled';
import { hexByColor } from '../../../constants/colors';
import { rippleMaker } from '../../../utils/helper';

const buttonSize = {
  small: {
    padding: '5px 10px',
    fontSize: 11,
  },
  medium: {
    padding: '8px 15px',
    fontSize: 13,
  },
  large: {
    padding: '12px 25px',
    fontSize: 16,
  }
};

const buttonTheme = {
  primary: {
    backgroundColor: 'transparent',
    border: `2px solid ${hexByColor.white}`,
    fontWeight: 600,
    ...rippleMaker(hexByColor.white, hexByColor.darkBlue),
  },
  secondary: {
    backgroundColor: hexByColor.blue,
    border: 'none',
    ...rippleMaker(hexByColor.darkBlue),
  },
  tertiary: {
    backgroundColor: hexByColor.orange,
    border: 'none',
    fontWeight: 600,
    ...rippleMaker(hexByColor.darkOrange),
  }
};

const Button = styled.button(props => ({
  borderRadius: '2px',
  cursor: 'pointer',
  color: hexByColor.white,
  minWidth: 'max-content',
  width: 'max-content',
  whiteSpace: 'nowrap',
  ...props.expandable && {
    [`@media (max-width: 480px)`]: {
      width: '100%'
    }
  },
  ...(props.size) && buttonSize[props.size] ?
    buttonSize[props.size] : buttonSize['medium'],
  ...(props.color && buttonTheme[props.color]) ?
    buttonTheme[props.color] : buttonTheme['primary']
}));

export default Button;
