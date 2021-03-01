import { useDispatch } from 'react-redux';
import { clearNumber } from '../actions/actions';

const Clear = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearNumber());
    }

    return (
        <button onClick={handleClick} className="btn btn-danger go">Clear</button> 
    )
}

export default Clear;