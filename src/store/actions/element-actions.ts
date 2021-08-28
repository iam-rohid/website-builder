import { ComponentType } from "../../types";
import { ElementActionTypes } from "../";

export type AddElementPayloadType = {
  element: ComponentType;
  parentId: string | false;
};
export type RemoveElementPayloadType = {
  element: ComponentType;
};
export type SelectedElementPayloadType = {
  element: ComponentType | false;
};

type AddElementType = {
  type: ElementActionTypes.ADD_ELEMENT;
  payload: AddElementPayloadType;
};

type RemoveElementType = {
  type: ElementActionTypes.REMOVE_ELEMENT;
  payload: {
    element: ComponentType;
  };
};

type SelectElementType = {
  type: ElementActionTypes.CHANGE_SELECTED_ELEMENT;
  payload: {
    element: ComponentType | false;
  };
};

export type ElementAction =
  | AddElementType
  | RemoveElementType
  | SelectElementType;
