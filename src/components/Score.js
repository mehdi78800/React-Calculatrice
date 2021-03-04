import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reset } from '../actions/actions';


const Score = () => {

    const {score} = useSelector(state => state.calculReducer);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(reset());
    }

        return (
            <div className="container">
                <div className="row">
                    <div className="alert alert-success col-12" role="alert">
                        <p>Félicitations vous avez répondu à toutes les questions vous avez obtenu un score de : <b>{score}</b></p>   
                    </div>
                </div>
                <div className="row justify-content-end">
                    <button onClick={handleClick} className="btn btn-success ">Recommencer</button> 
                </div>

            </div>
        )
}

export default Score;