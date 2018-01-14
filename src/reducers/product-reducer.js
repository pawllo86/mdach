import _ from 'lodash';

import { FETCH_PRODUCTS } from '../actions/actions';

export default function(state = new Map(), action) {
    switch(action.type) {
        case FETCH_PRODUCTS:
            const data = action.payload.data;
            return _.mapKeys(data, 'id');
        default:
            return state;
    }
}