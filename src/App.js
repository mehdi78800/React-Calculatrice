import './App.css';
import Num from './components/Num';
import Message from './components/Message';
import Infos from './components/Infos';
import Erase from './components/Erase';
import Clear from './components/Clear';
import Go from './components/Go';
import End from './components/End';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const {count} = useSelector(state => state);

  if (count !== 0) {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Game</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Score</a>
              </li>

            </ul>
          </div>
        </nav>
        <div className="row">
          <h1>Calcul mental!</h1>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <Message/>
            </div>
            <div className="row">
              <Num number={7}/>
              <Num number={8}/>
              <Num number={9}/>  
            </div>
            <div className="row">
              <Num number={4}/>
              <Num number={5}/>
              <Num number={6}/>  
            </div>
            <div className="row">
              <Num number={1}/>
              <Num number={2}/>
              <Num number={3}/>  
            </div>
            <div className="row">
                <Num number={0}/>
                <Go />
            </div>
            <div className="row">
              <Erase />
              <Clear />
            </div>
          </div>
          <div className="col-4">
            <Infos />
          </div>
        </div>
      </div>
    );
  }else{
    return(
      <End/>
    );
  }

}

export default App;
