import { COUNTER_CHANGE } from '../constants';
import { VERIFY_CODE } from '../constants';

export  function changeCount(count) {
    return{
        type: COUNTER_CHANGE,
        payload: count
    }
}

export  function setCode(code) {
    return{
        type: VERIFY_CODE,
        payload: code
    }
}