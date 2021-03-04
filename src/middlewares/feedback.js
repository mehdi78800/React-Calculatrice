// import {  } from '../constants/actions-types';
import { setFeedback } from '../actions/actions';

const middlewareFeedback = store => next => action => {

  const returnAction = next(action);

  // if (action.type === ADD_DRAGON || action.type === DELETE_DRAGON) {
  //   const { count } = store.getState().dragonReducer;

  //   store.dispatch(set_log({ count : count , date : getDateNow(), name : 'dragon' }));
  // }

  // if (action.type === ADD_KNIGHT || action.type === DELETE_KNIGHT) {
  //   const { count } = store.getState().knightReducer;

  //   store.dispatch(set_log({ count : count , date : getDateNow(), name : 'knight'}));
  // }

  return returnAction; // les autres middlewares ...
}

export default middlewareFeedback;