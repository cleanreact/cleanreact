import React, { lazy, Suspense, Fragment } from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';
import index from './views/home';
import {AuthGuard} from './components/AuthGuard';
import {GuestGuard} from './components/GuestGuard';

export const renderRoutes = (routes = []) => (
   <Suspense fallback="<p> Loading </p>">
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment; 
        const Layout = route.layout || Fragment;
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense> 
);

const routes = [
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('./views/errors/NotFoundView'))
  },
  // {
  //   exact: true,
  //   guard: GuestGuard,
  //   path: '/login',
  //   component: lazy(() => import('./views/auth/login'))
  // },
  // {
  //   exact: true,
  //   guard: GuestGuard,
  //   path: '/register',
  //   component: lazy(() => import('./views/auth/register'))
  // },
    
  {
    path: '*',
    routes: [
      {
        exact: true,
        path: '/',
        component: index
      },
  
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }, 

  
];

export default routes;
