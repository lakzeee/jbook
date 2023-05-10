import { combineReducers } from "redux";
import cellsReducer from "./cellsReducer";

const reducers = combineReducers({
  cells: cellsReducer,
});

export default reducers;

//RootState: this type represents type of the entire Redux store state
//ReturnType<typeof reducers>: infer the type of the state by looking
//at the return type of the reducers function
export type RootState = ReturnType<typeof reducers>;
