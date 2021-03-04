import { combineReducers } from 'redux';

import calcul from './calcul';
import feedback from './feedback';

export default combineReducers({
    calculReducer : calcul,
    feedbackReducer : feedback
});