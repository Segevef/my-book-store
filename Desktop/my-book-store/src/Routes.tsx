import React from 'react';

import HomePage from './views/HomePage/HomePage';
import StorePage from './views/StorePage/StorePage';
import LoginPage from './views/LoginPage/LoginPage';
import CartPage from './views/CartPage/CartPage';



export const dashboardRoutes = [
    /* app */
    [
      {
        path: "/HomePage",
        name: "Home Page",
        component: HomePage,
        layout: "",
        auth: false,
      },
      {
        path: "/StorePage",
        name: "Store Page",
        component: StorePage,
        layout: "",
        auth: false,
      },
      {
        path: "/LoginPage",
        name: "Login Page",
        component: LoginPage,
        layout: "",
        auth: false,
      },
      //TODO: rest of pages

    ],
    /* account */
    [
      {
        path: "/CartPage",
        name: "Cart Page",
        component: CartPage,
        layout: "",
        auth: true,
      },

    ],
  ];