import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import NotFound from 'containers/NotFound';
import Startup from 'containers/Startup';
import Intrapreneur from 'containers/Intrapreneur';
import Product from 'containers/Product';
import Process from 'containers/Process';
import Explore from 'containers/Explore';
import Automation from 'containers/Automation';
import Partnership from 'containers/Partnership';
import SolutionsMl from 'containers/SolutionsMl';
import SolutionsPartnership from 'containers/SolutionsPartnership';
import SolutionsWorkflow from 'containers/SolutionsWorkflow';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/automation">
            <Automation />
          </Route>
          <Route path="/Partnership">
            <Partnership />
          </Route>
          <Route path="/solutions-ml">
            <SolutionsMl />
          </Route>
          <Route path="/solutions-partnership">
            <SolutionsPartnership />
          </Route>
          <Route path="/solutions-workflow">
            <SolutionsWorkflow />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/startups">
            <Startup />
          </Route>
          <Route path="/enterprise">
            <Intrapreneur />
          </Route>
          <Route path="/process">
            <Process />
          </Route>
          <NotFound />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
