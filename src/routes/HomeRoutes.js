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
      path: '/services',
      component: lazy(() => import('src/views/home/ServicesView'))
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
      exact: true,
      path: '/about',
      component: lazy(() => import('src/views/home/AboutView'))
      // component: lazy(() => import('src/views/home/LandingPageView'))
    },
    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;
