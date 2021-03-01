import { useSelector } from 'react-redux';

const Message = () => {
    const {message, calcul} = useSelector(state => state);
    
    // console.log(number);
        return (
            <>
            <div className="alert alert-primary" role="alert">
                {message} 
            </div>    
            <div className="alert alert-primary" role="alert">
                {calcul} 
            </div>     
            </> 
        )
   
}

export default Message;