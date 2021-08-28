import { combineReducers } from "redux";
import { editorReducer } from "./editor-reducer";
import { elementReducer } from "./element-reducer";

export const reducers = combineReducers({
  editor: editorReducer,
  elements: elementReducer,
});
export type StateType = ReturnType<typeof reducers>;
