import { Dispatch } from "redux";
import { DeviceSizes, EditorActionTypes, EditorAction } from "../";

export const ChangeDarkMode = (darkMode: boolean) => {
  return (dispatch: Dispatch<EditorAction>) => {
    dispatch({
      type: EditorActionTypes.CHANGE_DARK_MODE,
      payload: darkMode,
    });
  };
};
export const ShowLeftPanel = (show: boolean) => {
  return (dispatch: Dispatch<EditorAction>) => {
    dispatch({
      type: EditorActionTypes.SHOW_LEFT_PANEL,
      payload: show,
    });
  };
};
export const ShowRightPanel = (show: boolean) => {
  return (dispatch: Dispatch<EditorAction>) => {
    dispatch({
      type: EditorActionTypes.SHOW_RIGHT_PANEL,
      payload: show,
    });
  };
};
export const ChangeDeviceSize = (deviceSize: DeviceSizes) => {
  return (dispatch: Dispatch<EditorAction>) => {
    dispatch({
      type: EditorActionTypes.CHANGE_DEVICE_SIZE,
      payload: deviceSize,
    });
  };
};
