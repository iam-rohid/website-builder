import { combineReducers } from "redux";
import { editorReducer } from "./editor-reducer";

export const reducers = combineReducers({
  editor: editorReducer,
});
export type stateType = ReturnType<typeof reducers>;
