import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Startup from 'containers/Startup';
import Intrapreneur from 'containers/Intrapreneur';
import Product from 'containers/Product';
import Process from 'containers/Process';
import Explore from 'containers/Explore';
import Solutions from 'containers/Solutions';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/solutions">
            <Solutions />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/angel-backend-startups">
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
