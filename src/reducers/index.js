/* import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    state: (state = {}) => state,
});

export default rootReducer; */

import { USER_INPUT } from '../Constants/constants';

const userInit = {
    userInp: '',
};

export const setUserInput = (state = userInit, action = {}) => {
    switch (action.type) {
        case USER_INPUT:
            return Object.assign({}, state, { userInp: action.payload });
        default:
            return state;
    }
};
