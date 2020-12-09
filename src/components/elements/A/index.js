import styled from '@emotion/styled';
import { hexByColor } from '../../../constants/colors';

const A = styled.a({
  textDecoration: 'none',
  color: hexByColor.link,
  cursor: 'pointer',
  '&:hover, &:active': {
    textDecoration: 'underline',
  }
});

export default A;
