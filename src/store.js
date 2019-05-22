import ballsReducer from "./reducers/balls";
import { createStore } from "redux"; // импорт из Redux-библиотеки
const initialState = {  balls: [] } ;
export default createStore(ballsReducer, initialState);
