import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import 'moment/locale/fa';
import moment from 'moment';
import store from 'state/store';
import { Theme } from './provider/theme';
import * as serviceWorker from './serviceWorker';
import fa_IR from 'antd/lib/locale-provider/fa_IR';
import 'antd/dist/antd.css';
import dayjs from 'dayjs';

import jalali from 'jalaliday';

moment.locale('fa');
dayjs.extend(jalali);
dayjs.locale('fa');

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <ConfigProvider locale={fa_IR} direction="rtl">
        <App />
      </ConfigProvider>
    </Theme>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
