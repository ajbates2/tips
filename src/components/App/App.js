import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import UserPage from '../../routes/UserPage/UserPage';

class App extends Component {

  state = {
    shift: [],
    paychecks: [],
    error: null,
  }

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/dashboard'} component={Dashboard} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/register'} component={RegistrationPage} />
            <Route path={'/user'} component={UserPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;