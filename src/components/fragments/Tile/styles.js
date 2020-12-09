import { hexByColor } from '../../../constants/colors';

const root = {
  height: 'auto',
  border: `2px solid ${hexByColor.outlineGrey}`,
  boxShadow: `inset 1px 1px 3px ${hexByColor.white}, 1px 1px 3px ${hexByColor.white}`,
  margin: 15,
  padding: '10px 10px 20px 20px',
  textAlign: 'left',
  position: 'relative',
  '& .head': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
    '& .icon': {
      fontSize: '28px',
      color: hexByColor.outlineGrey,
      textShadow: `1px 1px 3px ${hexByColor.white}, 1px 1px 3px ${hexByColor.white}`,
    }
  },
  '& .content': {
    paddingRight: 10
  }
};

export { root };
