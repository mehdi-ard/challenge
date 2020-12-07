import { lazy } from 'react';
import { SHOULD_NOT_AUTH } from './enums';

const routes = [
  //home
  {
    title: 'صفحه اصلی',
    path: '/',
    exact: true,
    icon: '',
    component: () => lazy(() => import('pages/home')),
    include: [''],
    appBar: true,
    guard: SHOULD_NOT_AUTH,
  },
  {
    title: 'ایجاد پست',
    path: '/create-post',
    exact: true,
    icon: '',
    component: () => lazy(() => import('pages/post')),
    include: [''],
    appBar: true,
    guard: SHOULD_NOT_AUTH,
  },
  {
    title: 'صفحه ای یافت نشد',
    path: '*',
    exact: true,
    icon: '',
    component: () => lazy(() => import('pages/404')),
    include: [''],
    appBar: false,
    guard: SHOULD_NOT_AUTH,
  },
];

export default routes;

export const visibleRoute = (which) => {
  return routes
    .filter((route) => route.include.indexOf(which) !== -1)
    .reduce((a, b) => {
      return {
        ...a,
        [b.path]: b,
      };
    }, {});
};
