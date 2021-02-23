import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import HomeLayout from '~/layouts/HomeLayout';

// ----------------------------------------------------------------------

const HomeRoutes = {
  path: '*',
  layout: HomeLayout,
  routes: [
    {
      exact: true,
      path: '/',
      component: lazy(() => import('src/views/home/LandingPageView'))
    },
    {
      exact: true,
      path: '/components',
      component: lazy(() => import('src/views/home/ComponentsView'))
    },
    {
      exact: true,
      path: '/partners',
      component: lazy(() => import('src/views/home/PartnersView'))
    },
    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;
