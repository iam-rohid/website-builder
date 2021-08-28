import {
  DeviceSizes,
  EditorActionTypes,
  EditorStateType,
  EditorAction,
} from "../";

const initState: EditorStateType = {
  darkMode:
    EditorActionTypes.CHANGE_DARK_MODE in localStorage
      ? localStorage.getItem(EditorActionTypes.CHANGE_DARK_MODE) === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches,
  showLeftPanel:
    EditorActionTypes.SHOW_LEFT_PANEL in localStorage
      ? localStorage.getItem(EditorActionTypes.SHOW_LEFT_PANEL) === "true"
      : true,
  showRightPanel:
    EditorActionTypes.SHOW_RIGHT_PANEL in localStorage
      ? localStorage.getItem(EditorActionTypes.SHOW_RIGHT_PANEL) === "true"
      : false,
  deviceSize:
    EditorActionTypes.CHANGE_DEVICE_SIZE in localStorage
      ? (localStorage.getItem(
          EditorActionTypes.CHANGE_DEVICE_SIZE
        ) as DeviceSizes)
      : DeviceSizes.DESKTOP,
  leftPanelWidth: 280,
};

export const editorReducer = (
  state: EditorStateType = initState,
  action: EditorAction
): EditorStateType => {
  switch (action.type) {
    case EditorActionTypes.CHANGE_DARK_MODE:
      if (state.darkMode === action.payload) return state;
      localStorage.setItem(
        EditorActionTypes.CHANGE_DARK_MODE,
        action.payload ? "true" : "false"
      );
      return {
        ...state,
        darkMode: action.payload,
      };
    case EditorActionTypes.SHOW_LEFT_PANEL:
      if (state.showLeftPanel === action.payload) return state;
      localStorage.setItem(
        EditorActionTypes.SHOW_LEFT_PANEL,
        action.payload ? "true" : "false"
      );
      return {
        ...state,
        showLeftPanel: action.payload,
      };
    case EditorActionTypes.SHOW_RIGHT_PANEL:
      if (state.showRightPanel === action.payload) return state;
      localStorage.setItem(
        EditorActionTypes.SHOW_RIGHT_PANEL,
        action.payload ? "true" : "false"
      );
      return {
        ...state,
        showRightPanel: action.payload,
      };
    case EditorActionTypes.CHANGE_DEVICE_SIZE:
      if (state.deviceSize === action.payload) return state;
      localStorage.setItem(
        EditorActionTypes.CHANGE_DEVICE_SIZE,
        action.payload
      );
      return {
        ...state,
        deviceSize: action.payload,
      };
    case EditorActionTypes.RESIZE_LEFT_PANEL:
      return {
        ...state,
        leftPanelWidth: action.payload,
      };
    default:
      return state;
  }
};
