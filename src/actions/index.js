import { USER_INPUT } from '../Constants/constants';

export const userInput = input => ({
    type: USER_INPUT,
    payload: input,
});

//"build": "webpack -p --define process.env.NODE_ENV='\"production\"' --progress --colors",