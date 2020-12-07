import style from 'provider/style';

const styles = (theme) => ({
  innerSkeleton: {
    minHeight: 10,
    animationName: '$inner',
    animationDuration: '1.4s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    background:
      '-webkit-gradient(linear, left top, right top, color-stop(25%, #f2f2f2), color-stop(37%, #e6e6e6), color-stop(63%, #f2f2f2))',
    background: 'linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%)',
    backgroundSize: '400% 100%',
  },

  '@keyframes inner': {
    '0%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0 50%' },
  },
});

export default style(styles);
