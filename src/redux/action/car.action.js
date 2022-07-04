import {STOP,START,GO } from "../state/car.state"
const Red = () => {
    return{
        type : STOP,
        speed : 10
    }
}
const Yellow = () => {
    return{
        type : START
    }
}
const Green = () => {
    return{
        type : GO,
        speed : 1000
    }
}
export {
    Red,
    Yellow,
    Green
}