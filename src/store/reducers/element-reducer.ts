import { ComponentType } from "../../types";
import {
  ElementActionTypes,
  AddElementPayloadType,
  ElementAction,
  RemoveElementPayloadType,
  SelectedElementPayloadType,
} from "../";

type ElementStateType = {
  elements: ComponentType[];
  selectedElement: ComponentType | false;
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
      ...state.elements.map((element) => {
        return {
          ...element,
          expanded:
            state.selectedElement && element.id === state.selectedElement.id
              ? true
              : element.expanded,
        };
      }),
      {
        ...payload.element,
        parentId: payload.parentId,
        expanded: true,
      },
    ],
    selectedElement: payload.element,
  };
};

const removeElement = (
  state: ElementStateType,
  payload: RemoveElementPayloadType
): ElementStateType => {
  return {
    ...state,
    elements: state.elements.filter(
      (element) => element.id !== payload.element.id
    ),
  };
};

const changeSelectedElement = (
  state: ElementStateType,
  payload: SelectedElementPayloadType
): ElementStateType => {
  return {
    ...state,
    elements: state.elements.map((element) => {
      return {
        ...element,
        expanded:
          payload.element && element.id === payload.element.id
            ? element.expanded === undefined || !element.expanded
            : element.expanded,
      };
    }),
    selectedElement: payload.element
      ? {
          ...payload.element,
          expanded: true,
        }
      : false,
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
