import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '@containers/HomePage';
import {
  PageNotFound,
  About,
} from '@components';

export default function Application() {
  return (
    <div className="application container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </div>
  );
}
