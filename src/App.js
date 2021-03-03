import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import End from './components/End';
import Game from './components/Game';
import Score from './components/Score';

import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  const {count} = useSelector(state => state);

    return (
      <div className="container">
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/game"  component={Game}/>
            <Route exact path="/score">
              {false ? <Redirect to="/game" /> : <Home />}
            </Route>
          </Switch>
        </Router>
      </div>
    );


}

export default App;
