import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Startup from 'containers/Startup';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/startup">
            <Startup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
