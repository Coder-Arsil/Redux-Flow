import { createStore } from "redux";
import userReducer from "./reducer/user.reducer"
const storage = createStore(userReducer);
export default storage;