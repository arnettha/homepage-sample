function rippleMaker(hoverColor, textHoverColor='') {
  return {
    position: 'relative',
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      backgroundImage: 'radial-gradient(circle, #000 10%, transparent 10.01%)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      transform: 'scale(10, 10)',
      opacity: 0,
      transition: 'transform 0.5s, opacity 1s',
    },
    '&:hover': {
      backgroundColor: hoverColor,
      ...textHoverColor && { color: textHoverColor }
    },
    '&:active': {
      boxShadow: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
      backgroundImage: 'none',
    },
    '&:active:after': {
      transform: 'scale(0, 0)',
      opacity: 0.2,
      transition: '0s',
    }
  }
}

export { rippleMaker };
