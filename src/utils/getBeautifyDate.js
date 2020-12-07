import moment from 'jalali-moment';

export const getBeautifyDate = (published) =>
  published
    ? moment(new Date(published)).locale('fa').format('YYYY/MM/DD')
    : '';

export const getGregorianDate = (published) =>
  published ? moment.from(published, 'fa', 'YYYY/MM/DD').format() : '';

export const getGregorianDateFormat = (published) =>
  published
    ? moment.from(published, 'EN', 'YYYY/MM/DD').format('YYYY/MM/DD')
    : '';
