import withStyles from 'react-jss';

export default styles => component =>
  withStyles(styles, { withTheme: true })(component);
