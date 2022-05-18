import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { demoCv as DemoCv } from './modules/Cv/demoCv';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DemoCv} />
      </Switch>
    </Router>
  );
}

export default App;
