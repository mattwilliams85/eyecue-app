import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Startup from 'containers/Startup';
import Intrapreneur from 'containers/Intrapreneur';
import Product from 'containers/Product';
import Process from 'containers/Process';
import Explore from 'containers/Explore';
import Automation from 'containers/Automation';
import Partnership from 'containers/Partnership';
import ML from 'containers/ML';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/automation">
            <Automation />
          </Route>
          <Route path="/Partnership">
            <Partnership />
          </Route>
          <Route path="/solutions-ml">
            <ML />
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
