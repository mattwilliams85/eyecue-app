import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Startup from 'containers/Startup';
import Intrapreneur from 'containers/Intrapreneur';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/angel-backed-startups">
            <Startup />
          </Route>
          <Route path="/enterprise-intrapreneur">
            <Intrapreneur />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
