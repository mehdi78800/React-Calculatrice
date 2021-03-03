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
