import React from 'react';
import { Calendar } from './Calendar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';

function App() {
  return (
    <Router>
      <Security issuer='https://dev-<redacted>.okta.com/oauth2/default'
                clientId='<redacted>'
                redirectUri={window.location.origin + '/callback'}
                pkce={true}>
        <SecureRoute path='/' exact={true} component={Calendar}/>
        <Route path='/callback' component={LoginCallback}/>
      </Security>
    </Router>
  );
}

export default App;
