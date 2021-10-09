import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from 'containers/Home';
import NotFound from 'containers/NotFound';
import Startup from 'containers/Startup';
import Intrapreneur from 'containers/Intrapreneur';
import Product from 'containers/Product';
import Process from 'containers/Process';
import Explore from 'containers/Explore';
import Automation from 'containers/Automation';
import SolutionsMl from 'containers/SolutionsMl';
import SolutionsPartnership from 'containers/SolutionsPartnership';
import SolutionsWorkflow from 'containers/SolutionsWorkflow';

import './App.scss';

function App() {
  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      document.documentElement.scrollTop = 0;
    }, [location]);
  }

  usePageViews();

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/automation">
          <Automation />
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
    </div>
  );
}

export default App;
