import {SEND_NUMBER, SEND_CALCUL, SEND_ANSWER, ERASE_NUMBER, CLEAR_NUMBER, RESET} from '../constants/action-type';
import Multiplication from '../utils/multiplications';

// initialisation des states : SOURCE DE VERITE
const stateInit = {
    count: 10,
    score: 0,
    number: '',
    message: 'Vous avez 10 multiplications à faire. Utilisez les touches du clavier pour répondre. Bonne chance!',
    calculs: '',
    messageStyle: 'alert alert-primary col-12',
}


const reducer = (state = stateInit, action = {}) => {
    const { number, calculs, count, score, messageStyle } = state;

    switch (action.type) {

        case SEND_NUMBER:
            return {
                ...state,
                number : number + action.payload,
            }
        
        case SEND_CALCUL:
            return {
                ...state,
                calculs : Multiplication(),
            }

        case SEND_ANSWER:

            const arrayCalcul = calculs.split("x");
            const result = parseInt(arrayCalcul[0])*parseInt(arrayCalcul[1]);
            const answer = parseInt(number);
            let sentence = '';
            let scoring = score;
            let style = messageStyle;

            if (result === answer) {
                sentence = 'Bonne réponse ! la bonne réponse était bien: '+result;
                scoring = scoring +1;
                style = 'alert alert-success col-12';
            }else{
                sentence = 'Mauvaise réponse, la bonne réponse était: '+result;
                style = 'alert alert-danger col-12';
            }

            return {
                ...state,
                number : '',
                count : count -1,
                calculs : Multiplication(),
                message : sentence,
                score : scoring,
                messageStyle : style 

            }

        case ERASE_NUMBER:
            return {
                ...state,
                number : number.substr(0, number.length -1)
            }

        case CLEAR_NUMBER:
            return {
                ...state,
                number : ''
            }

        case RESET:
            return {
                ...state,
                number : '',
                count : 10,
                calculs : '',
                message : 'Vous avez 10 multiplications à faire. Utilisez les touches du clavier pour répondre. Bonne chance!',
                score : 0,
                messageStyle : 'alert alert-primary col-12', 
            }

        default: return state;
    }
}

export default reducer;
