export enum DeviceSizes {
  DESKTOP = "Desktop",
  TABLET = "Tablet",
  MOBILE = "mobile",
}

export type EditorStateType = {
  darkMode: boolean;
  showLeftPanel: boolean;
  showRightPanel: boolean;
  deviceSize: DeviceSizes;
};

export enum EditorActionTypes {
  SHOW_LEFT_PANEL = "SHOW_LEFT_PANEL",
  SHOW_RIGHT_PANEL = "SHOW_RIGHT_PANEL",
  CHANGE_DARK_MODE = "CHANGE_DARK_MODE",
  CHANGE_DEVICE_SIZE = "CHANGE_DEVICE_SIZE",
}
