import { DeviceSizes, EditorActionTypes } from "../";

type ShowLeftPanelAction = {
  type: EditorActionTypes.SHOW_LEFT_PANEL;
  payload: boolean;
};
type ShowRightPanelAction = {
  type: EditorActionTypes.SHOW_RIGHT_PANEL;
  payload: boolean;
};
type ChangeDarkModeAction = {
  type: EditorActionTypes.CHANGE_DARK_MODE;
  payload: boolean;
};
type ChangeDeviceSizeAction = {
  type: EditorActionTypes.CHANGE_DEVICE_SIZE;
  payload: DeviceSizes;
};

export type EditorAction =
  | ShowLeftPanelAction
  | ShowRightPanelAction
  | ChangeDarkModeAction
  | ChangeDeviceSizeAction;
