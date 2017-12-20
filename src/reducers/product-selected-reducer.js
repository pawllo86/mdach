import { PRODUCT_SELECTED } from '../actions/actions';

export default function(state = null, action) {
    switch(action.type) {
        case PRODUCT_SELECTED:
            return action.payload;
    }
    return state;
}