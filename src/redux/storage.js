import { createStore } from "redux"
import carReducer from "./reducer/car.reducer";
const storage = createStore(carReducer);
export default storage;