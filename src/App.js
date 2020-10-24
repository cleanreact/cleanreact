import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import routes, { renderRoutes } from './routes';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App"> 
      <Router history={history}>
      {renderRoutes(routes)}
      </Router>
    </div>
  );
}

export default App;
