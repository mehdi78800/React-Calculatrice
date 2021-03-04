import {
    SET_FEEDBACK
} from "../constants/action-type";

const stateInit = {
    feedbacks: []
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case SET_FEEDBACK:

            // copie profonde (nested) d'objet
            const feedbacks = state.feedbacks.map( feedback => {

                return { ...feedback }
            } ) ;

            feedbacks.push({ ...action.payload });

            return {
                ...state,
                feedbacks
            }

        default:
            return state;
    }
}

export default reducer;
