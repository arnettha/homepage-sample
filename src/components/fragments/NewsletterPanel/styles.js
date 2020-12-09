import { hexByColor } from '../../../constants/colors';
import { rippleMaker } from '../../../utils/helper';

const root = {
  background: 'rgba(0, 123, 193, 0.85)',
  color: hexByColor.white,
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: 999,
  padding: '10px 20px 20px 20px',
  maxWidth: 640,
  '& .row': {
    clear: 'both',
  },
  '& .close': {
    cursor: 'pointer',
    padding: '0px 5px',
    margin: '0px -10px',
    width: 'max-content',
    float: 'right',
    borderRadius: '15px',
    ...rippleMaker('rgba(255, 255, 255, 0.7)', hexByColor.darkBlue),
  },
  '& .subscribe': {
    display: 'flex',
    marginTop: 15,
    [`@media (max-width: 480px)`]: {
      flexDirection: 'column',
      alignItems: 'stretch',
      '& > *': {
        flexBasis: '100%',
      }
    },
    '& .textfield': {
      flexGrow: 2.5,
      marginRight: 5,
      [`@media (max-width: 480px)`]: {
        marginRight: 0,
        marginBottom: 10
      }
    },
  }
}

export { root };
