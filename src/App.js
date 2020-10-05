import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
  let history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
