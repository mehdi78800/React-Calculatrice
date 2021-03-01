import {SEND_NUMBER} from '../constants/action-type';

// initialisation des states : SOURCE DE VERITE
const stateInit = {
    count: 10,
    score: 0,
    number: 0,
    message: 'Vous avez 10 multiplications à faire. Utilisez les touches du clavier pour répondre. Bonne chance!',
    calculs: ["2 x 2", "3 x 3"],
    calcul: 'Calculez : 2 x 2 = '
}


export default (state = stateInit, action = {}) => {
    const { number, calcul  } = state;

    switch (action.type) {

        case SEND_NUMBER:
        return {
            ...state,
            number : action.payload,
            calcul : calcul + action.payload
        }

        default: return state;
    }
}