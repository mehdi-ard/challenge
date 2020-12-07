import React from 'react';
import { DatePicker as DatePickerJalali } from 'antd-jalali';
import 'moment/locale/fa';
import locale from 'antd/es/date-picker/locale/fa_IR';
import style from './style';

function DatePicker({ classes, className, ...props }) {
  return (
    <DatePickerJalali
      className={[classes.datepicker, className].join(' ')}
      {...props}
      locale={locale}
    />
  );
}

export default style(DatePicker);
