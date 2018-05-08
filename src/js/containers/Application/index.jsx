import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '@containers/HomePage';
import { PageNotFound } from '@components';

export default function Application() {
  return (
    <div className="application">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </div>
  );
}
