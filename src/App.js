import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Startup from 'containers/Startup';
import Intrapreneur from 'containers/Intrapreneur';
import Process from 'containers/Process';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/angel-backed-startups">
            <Startup />
          </Route>
          <Route path="/enterprise-intrapreneur">
            <Intrapreneur />
          </Route>
          <Route path="/process">
            <Process />
          </Route>
          <Home />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
