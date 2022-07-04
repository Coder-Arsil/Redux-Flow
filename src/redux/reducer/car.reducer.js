import { START, STOP, GO } from "../state/car.state";


const carReducer = (state="",action) => {
    if(action.type === STOP){
        return state = "STOP"
    }
    if(action.type === START){
        return state = "START"
    }
    if(action.type === GO){
        return state = "GO"
    }
}
export default carReducer;