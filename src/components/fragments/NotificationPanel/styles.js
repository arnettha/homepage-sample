import { hexByColor } from '../../../constants/colors';

const root = {
  background: hexByColor.lightGrey,
  position: 'fixed',
  top: 0,
  zIndex: 3,
  width: '100%',
  transition: 'all .3s ease-out',
  '& .content': {
    maxWidth: 720,
    boxSizing: 'border-box',
    display: 'flex',
    padding: 15,
    margin: '0 auto',
    [`@media (max-width: 480px)`]: {
      flexDirection: 'column',
    },
    '& .text': {
      marginRight: 10,
      [`@media (max-width: 480px)`]: {
        marginBottom: 15,
      },
    }
  }
}

export { root };
