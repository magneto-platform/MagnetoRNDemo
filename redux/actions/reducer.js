import { COUNTER_CHANGE } from '../constants';
import { VERIFY_CODE } from '../constants';
const initialState = {
    count: 0,
    code: 0
};
const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count:action.payload
            };
        case VERIFY_CODE:
            return {
                ...state,
                code:action.payload
            };
        default:
            return state;
    }
}
export default countReducer;