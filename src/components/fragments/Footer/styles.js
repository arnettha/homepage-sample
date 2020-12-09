import { hexByColor } from '../../../constants/colors';

const root = {
  backgroundColor: hexByColor.darkPurple,
  '& .footer-text': {
    padding: 30,
    color: hexByColor.white,
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.6,
  }
}

export { root };
