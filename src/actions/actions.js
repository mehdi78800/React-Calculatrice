import {SEND_NUMBER, ERASE_NUMBER, CLEAR_NUMBER} from '../constants/action-type'

export const sendNumber = (payload) => {

    return {
        type: SEND_NUMBER, payload
    }
    
};

export const eraseNumber = () => {

    return {
        type: ERASE_NUMBER
    }
    
};

export const clearNumber = () => {

    return {
        type: CLEAR_NUMBER
    }
    
};
    