import { ComponentType } from "../../types";
import {
  ElementActionTypes,
  AddElementPayloadType,
  ElementAction,
  RemoveElementPayloadType,
  SelectedElementPayloadType,
} from "../";
import { getHtmlDocumnet } from "../../lib/generateHTML";
import { ComponentsEnum } from "../../enums";

type ElementStateType = {
  components: ComponentType[];
  selectedElement: ComponentType | false;
  html: string;
  css: string;
  js: string;
};

const initState: ElementStateType = {
  components: [],
  selectedElement: false,
  html: "",
  css: "",
  js: "",
};

const addElement = (
  state: ElementStateType,
  payload: AddElementPayloadType
): ElementStateType => {
  const newComponent = {
    ...payload.element,
    parentId: payload.parentId,
    expanded: true,
  } as ComponentType;

  let newState = {
    ...state,
    components: [
      ...state.components.map((element) => {
        return {
          ...element,
          expanded:
            state.selectedElement && element.id === state.selectedElement.id
              ? true
              : element.expanded,
        };
      }),
      newComponent,
    ],
    selectedElement: newComponent,
  };

  newState = {
    ...newState,
    html: getHtmlDocumnet(newState.components),
  };

  return newState;
};

const removeElement = (
  state: ElementStateType,
  payload: RemoveElementPayloadType
): ElementStateType => {
  return {
    ...state,
    components: state.components.filter(
      (component) => component.id !== payload.element.id
    ),
  };
};

const changeSelectedElement = (
  state: ElementStateType,
  payload: SelectedElementPayloadType
): ElementStateType => {
  return {
    ...state,
    components: state.components.map((component) => {
      return {
        ...component,
        expanded:
          payload.element && component.id === payload.element.id
            ? component.expanded === undefined || !component.expanded
            : component.expanded,
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
      if (
        state.selectedElement &&
        state.selectedElement.type === ComponentsEnum.TEXT_COMPONENT
      ) {
        return addElement(state, {
          element: action.payload.element,
          parentId: state.selectedElement.parentId,
        });
      }
      return addElement(state, action.payload);
    case ElementActionTypes.REMOVE_ELEMENT:
      return removeElement(state, action.payload);
    case ElementActionTypes.CHANGE_SELECTED_ELEMENT:
      return changeSelectedElement(state, action.payload);
    default:
      return state;
  }
};
