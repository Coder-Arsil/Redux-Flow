import { GET_ALL_USER } from "../state/user.state"
const getAllUser = () => {
    return {
        type: GET_ALL_USER
    }
}
const filter = (selectTag,event) => {
    let state = selectTag.current.value;
    let keyword = event.target.value;
    return {
        type: state,
        keyword : keyword
    }
}
export {
    getAllUser,
    filter
};