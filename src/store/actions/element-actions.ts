import HTMLElement from "../../models/HTMLElement";
import { ElementActionTypes } from "../";

export type AddElementPayloadType = {
  element: HTMLElement;
  parentId: string | false;
};
export type RemoveElementPayloadType = {
  element: HTMLElement;
};
export type SelectedElementPayloadType = {
  element: HTMLElement | false;
};

type AddElementType = {
  type: ElementActionTypes.ADD_ELEMENT;
  payload: AddElementPayloadType;
};

type RemoveElementType = {
  type: ElementActionTypes.REMOVE_ELEMENT;
  payload: {
    element: HTMLElement;
  };
};

type SelectElementType = {
  type: ElementActionTypes.CHANGE_SELECTED_ELEMENT;
  payload: {
    element: HTMLElement | false;
  };
};

export type ElementAction =
  | AddElementType
  | RemoveElementType
  | SelectElementType;
