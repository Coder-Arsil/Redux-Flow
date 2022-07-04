import userData from "../../../data.json"
import { GET_ALL_USER, FILTER_BY_EMAIL, FILTER_BY_MOBILE, FILTER_BY_ANY_VALUE } from "../state/user.state"
const defaultValue = {
    name: "simu",
    data: []
}
let filtered = "";
let keyword = "";
let check = "";
const userReducer = (state = defaultValue, action) => {
    if (action.type === GET_ALL_USER) {
        return {
            ...state,
            data: userData
        }
    }
    else if (action.type === FILTER_BY_EMAIL) {
        keyword = action.keyword;
        filtered = userData.filter(item => item.email.indexOf(keyword) !== -1);
        return {
            ...state,
            data: filtered
        }
    }
    else if (action.type === FILTER_BY_MOBILE) {
        keyword = action.keyword;
        filtered = userData.filter(item => item.mobile.toString().indexOf(keyword) !== -1);
        return {
            ...state,
            data: filtered
        }
    }
    else if (action.type === FILTER_BY_ANY_VALUE) {
        keyword = action.keyword;
        filtered = userData.filter(item => item.email.indexOf(keyword) !== -1);
        if (filtered.length === 0) {
            filtered = userData.filter(item => item.mobile.toString().indexOf(keyword) !== -1);
            return {
                ...state,
                data: filtered
            }
        }
        else {
            return {
                ...state,
                data: filtered
            }
        }

    }
}
export default userReducer