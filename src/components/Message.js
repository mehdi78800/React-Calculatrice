import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendCalcul } from '../actions/actions';


const Message = () => {
    const {message, calculs, count, number, messageStyle} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect( () => {
        if (count > 0) {
            dispatch(sendCalcul());
        }
    }, []);

    
    return (
        <>
        
        <div className={messageStyle} role="alert">
            {message} 
        </div>    
        <div className="alert alert-primary " role="alert">
            Calculez: {calculs} = {number} 
        </div>     
        </> 
    )
   
}

export default Message;