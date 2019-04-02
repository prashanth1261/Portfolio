import {
    TITLE_UPDATE,
    TITLE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    Title: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TITLE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case TITLE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;    
    }
};
