import React from 'react';
import jss from 'jss';
import rtl from 'jss-rtl';
import { createUseStyles, ThemeProvider, useTheme } from 'react-jss';

import jssPluginCompose from 'jss-plugin-compose';

const jssCreate = jss.createUseStyles({
  plugins: [rtl(), jssPluginCompose()]
});

function Jss(props) {
  return <ThemeProvider jss={jssCreate}>{props.children}</ThemeProvider>;
}

export default Jss;
