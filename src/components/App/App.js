import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import Dashboard from '../../routes/Dashboard/Dashboard';
import PaycheckPage from '../../routes/PaycheckPage/PaycheckPage';
import ShiftPage from '../../routes/ShiftPage/ShiftPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import LoginPage from '../../routes/LoginPage/LoginPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/dashboard'} component={Dashboard} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/register'} component={RegistrationPage} />
            <Route path={'/shift'} component={ShiftPage} />
            <Route path={'/paycheck'} component={PaycheckPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;