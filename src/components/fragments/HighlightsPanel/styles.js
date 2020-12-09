import { hexByColor } from '../../../constants/colors';

const root = {
  backgroundColor: hexByColor.smokeGrey,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 15,
  textAlign: 'center',
  overflowX: 'hidden',
  '& header': {
    padding: 20
  },
  '& .headline': {
    padding: '30px 0px',
    maxWidth: 720,

    /** Animation purpose. */
    opacity: 0,
    position: 'relative',
    left: '-200px',
    transition: 'all 1.5s ease-in'
    /** End of animation purpose. */
  },
  '& .grid-container': {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 35,
    
    /** Animation purpose. */
    opacity: 0,
    position: 'relative',
    right: '-200px',
    transition: 'all 1.5s ease-in',
    /** End of animation purpose */
    '& .grid-item': {
      display: 'flex',
      alignItems: 'stretch',
      [`@media (max-width: 480px)`]: {
        flex: '1 0 100%',
      },
      [`@media (min-width: 480px) and (max-width: 960px)`]: {
        flex: '1 0 50%',
      },
      [`@media (min-width: 960px)`]: {
        flex: '1 0 33.33%',
      }
    }
  }
};

export { root };
