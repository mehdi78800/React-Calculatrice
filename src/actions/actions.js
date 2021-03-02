import {SEND_NUMBER, SEND_CALCUL,SEND_ANSWER, ERASE_NUMBER, CLEAR_NUMBER, RESET} from '../constants/action-type'

export const sendNumber = (payload) => {

    return {
        type: SEND_NUMBER, payload
    }
    
};

export const sendCalcul = () => {

    return {
        type: SEND_CALCUL
    }
    
};


export const submitCalcul = () => {

    return {
        type: SEND_ANSWER
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
    

export const reset = () => {

    return {
        type: RESET
    }
    
};