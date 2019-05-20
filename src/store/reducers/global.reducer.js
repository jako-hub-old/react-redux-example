import { 
    CHANGE_TITLE,
 } from '../actions/global.actions';
 
const defaultState = {
    title : "Aprendiendo redux",
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_TITLE : return ({
            ...state,
            title : action.title
        });
        default : return ({...state});
    }
};