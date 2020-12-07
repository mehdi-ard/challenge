import React from 'react';
import { ThemeProvider } from 'react-jss';
import { useSelector } from 'react-redux';

const Style = (theme) => ({
  direction: 'rtl',
  typography: {
    useNextVariants: true,
    fontFamily: 'IRANYekanFaNum',
    fontSize: 14,
  },
  shape: { radius5: 5, radius8: 8, radius10: 10, radius12: 12, radius15: 15 },
  shadows: '0 1px 17px -10px #343c45',
  palette: {
    tonalOffset: 0.2,
    background: {
      paper: theme ? '#292b337a' : '#fff',
      default: theme ? '#16213e' : '#f0f2f5',
      light: theme ? '#001529' : '#fff',
    },
    contrastThreshold: 3,
    grey: {
      50: '#F9F9FC',
      100: '#F2F2F5',
      200: '#EAEAED',
      300: '#DADADD',
      400: '#B7B7B9',
      500: '#97979A',
      600: '#6F6F71',
      700: '#5B5B5D',
      800: '#3C3C3F',
      900: '#1C1C1E',
      A900: '#000',
      A700: '#e7ecf2',
      A100: '#758aa2',
      A400: '#d9e0e8',
      A200: '#f6f9fc',
      light: '#eef0f2',
    },
    text: {
      primary: theme ? '#fff' : 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      title: '#33465d',
      description: '#758aa2',
      contrastText: '#fff',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    border: theme ? '#272727' : '#DADADD',
    secondary: {
      main: '#05BEDA',
      light: '#E0F7FB',
      dark: '#03AEC7',
      contrastText: '#fff',
    },
    common: { black: '#000', white: '#fff' },
    error: {
      light: '#FFEAEE',
      main: '#EC1533',
      dark: '#CD0025',
      contrastText: '#fff',
    },
    success: {
      main: '#26de81',
    },
    type: 'light',
    action: {
      hoverOpacity: 0.08,
      hover: 'rgba(0, 0, 0, 0.08)',
      selected: 'rgba(0, 0, 0, 0.14)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      active: 'rgba(0, 0, 0, 0.54)',
    },
    primary: {
      main: '#2F4AA1',
      light: '#EDF0FA',
      dark: '#1D3789',
      contrastText: '#fff',
    },
  },
});

export const Theme = ({ children }) => {
  const theme = useSelector((state) => state.dark);
  return <ThemeProvider theme={Style(theme)}>{children}</ThemeProvider>;
};
