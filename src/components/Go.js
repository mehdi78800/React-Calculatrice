import { useDispatch } from 'react-redux';
import { submitCalcul } from '../actions/actions';

const Go = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(submitCalcul());
    }

    return (
        <button onClick={handleClick} className="btn btn-primary go">Entrée</button> 
    )
}

export default Go;