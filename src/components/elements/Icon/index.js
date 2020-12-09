import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { hexByColor } from '../../../constants/colors';

const Icon = styled(FontAwesomeIcon)({
  filter: `drop-shadow(1px 1px 1px ${hexByColor.white})`,
  color: hexByColor.outlineGrey,
  fontSize: '28px',
});

export default Icon;
