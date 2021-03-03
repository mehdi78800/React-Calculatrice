import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Score from './components/Score';

import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  const {count, calculs} = useSelector(state => state);

    return (
      <div className="container">
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route exact path="/game">
              {count == 0  ? <Redirect to="/score" /> : <Game />}
            </Route>
            <Route exact path="/score">
              {calculs == ''  ? <Redirect to="/game" /> : <Score />}
            </Route>
          </Switch>
        </Router>
      </div>
    );


}

export default App;
