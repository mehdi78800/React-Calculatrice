import {SEND_NUMBER, ERASE_NUMBER, CLEAR_NUMBER} from '../constants/action-type';

// initialisation des states : SOURCE DE VERITE
const stateInit = {
    count: 10,
    score: 0,
    number: '',
    message: 'Vous avez 10 multiplications à faire. Utilisez les touches du clavier pour répondre. Bonne chance!',
    calculs: [
        "0 x 2",
        "1 x 2",
        "2 x 2",
        "3 x 2",
        "4 x 2",
        "5 x 2",
        "6 x 2",
        "7 x 2",
        "8 x 2",
        "9 x 2",
        "10 x 2",
    ],
}


export default (state = stateInit, action = {}) => {
    const { number, calcul  } = state;

    switch (action.type) {

        case SEND_NUMBER:
            return {
                ...state,
                number : number + action.payload,
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

        default: return state;
    }
}