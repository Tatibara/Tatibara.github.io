import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from '../components/pages/HomePage/HomePage';
import ImprintPage from '../components/pages/ImprintPage/ImprintPage';
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';
import NavigationUrls from './NavigationUrls';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={NavigationUrls.homePageUrl} component={HomePage} />
      <Route path={NavigationUrls.imprintPageUrl} component={ImprintPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
