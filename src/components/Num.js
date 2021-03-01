import { useDispatch } from 'react-redux';
import { sendNumber } from '../actions/actions';

const Num = (props) => {
    const number = props.number;
    const dispatch = useDispatch();

    const handleClick = e => {
        const { value } = e.target;

        dispatch(sendNumber(value));
    }

    return (
        <button onClick={handleClick} className="btn btn-dark btnPav"  value={number}>{number}</button>        
    )
}

export default Num;