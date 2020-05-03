import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

// import { withAuthenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default withAuthenticator(App, { includeGreetings: true });
