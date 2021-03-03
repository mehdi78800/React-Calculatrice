import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reset } from '../actions/actions';


const Score = () => {

    const {score} = useSelector(state => state);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(reset());
    }

        return (
            <div className="container">
                <div className="row">
                  <h1>Calcul mental!</h1>
                </div>
                <div className="row">
                    <div className="alert alert-success " role="alert">
                        <p>Félicitations vous avez répondu à toutes les questions vous avez obtenu un score de : <b>{score}</b></p>   
                    </div>
                </div>
                <div className="row">
                    <button onClick={handleClick} className="btn btn-primary ">Recommencer</button> 
                </div>

            </div>
        )
}

export default Score;