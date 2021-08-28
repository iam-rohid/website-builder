import HTMLElement from "../../models/HTMLElement";
import {
  ElementActionTypes,
  AddElementPayloadType,
  ElementAction,
  RemoveElementPayloadType,
  SelectedElementPayloadType,
} from "../";

type ElementStateType = {
  elements: HTMLElement[];
  selectedElement: HTMLElement | false;
};

const initState: ElementStateType = {
  elements: [],
  selectedElement: false,
};

const addElement = (
  state: ElementStateType,
  payload: AddElementPayloadType
): ElementStateType => {
  return {
    ...state,
    elements: [
      ...state.elements,
      {
        ...payload.element,
        parentUUID: payload.parentId,
      },
    ],
  };
};

const removeElement = (
  state: ElementStateType,
  payload: RemoveElementPayloadType
): ElementStateType => {
  return {
    ...state,
    elements: state.elements.filter(
      (element) => element.uuid !== payload.element.uuid
    ),
  };
};

const changeSelectedElement = (
  state: ElementStateType,
  payload: SelectedElementPayloadType
): ElementStateType => {
  return {
    ...state,
    selectedElement: payload.element,
  };
};

export const elementReducer = (
  state: ElementStateType = initState,
  action: ElementAction
): ElementStateType => {
  switch (action.type) {
    case ElementActionTypes.ADD_ELEMENT:
      return addElement(state, action.payload);
    case ElementActionTypes.REMOVE_ELEMENT:
      return removeElement(state, action.payload);
    case ElementActionTypes.CHANGE_SELECTED_ELEMENT:
      return changeSelectedElement(state, action.payload);
    default:
      return state;
  }
};
