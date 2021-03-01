import { useSelector } from 'react-redux';

const Message = () => {
    const {message, calculs, count, number} = useSelector(state => state);
    
        return (
            <>
            <div className="alert alert-primary" role="alert">
                {message} 
            </div>    
            <div className="alert alert-primary" role="alert">
                Calculez: {calculs[count]} = {number}
            </div>     
            </> 
        )
   
}

export default Message;