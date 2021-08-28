import { ComponentType } from "../../types";
import {
  ComponentActionTypes,
  AddComponentPayloadType,
  ComponentAction,
  RemoveComponentPayloadType,
  SelectedComponentPayloadType,
  UpdateComponentPayloadType,
  ComponentStateType,
} from "..";
import { getHtmlDocumnet } from "../../lib/generateHTML";
import { ComponentsEnum } from "../../enums";

const initState: ComponentStateType = {
  components: [],
  selectedElement: false,
  html: "",
  css: "",
  js: "",
};

export const elementReducer = (
  state: ComponentStateType = initState,
  action: ComponentAction
): ComponentStateType => {
  switch (action.type) {
    case ComponentActionTypes.ADD_COMPONENT:
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
    case ComponentActionTypes.UPDATE_COMPONENT:
      return updateElement(state, action.payload);
    case ComponentActionTypes.REMOVE_COMPONENT:
      return removeElement(state, action.payload);
    case ComponentActionTypes.CHANGE_SELECTED_COMPONENT:
      return changeSelectedElement(state, action.payload);
    default:
      return state;
  }
};

function addElement(
  state: ComponentStateType,
  payload: AddComponentPayloadType
): ComponentStateType {
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
}

function updateElement(
  state: ComponentStateType,
  payload: UpdateComponentPayloadType
): ComponentStateType {
  let newState: ComponentStateType = {
    ...state,
    selectedElement: payload.element,
    components: state.components.map((component) => {
      if (component.id === payload.element.id) {
        return {
          ...payload.element,
        };
      }
      return component;
    }),
  };
  newState = {
    ...newState,

    html: getHtmlDocumnet(newState.components),
  };
  return newState;
}

function changeSelectedElement(
  state: ComponentStateType,
  payload: SelectedComponentPayloadType
): ComponentStateType {
  return {
    ...state,
    components: state.components.map((component): ComponentType => {
      if (payload.element && component.id === payload.element.id) {
        return {
          ...component,
          expanded:
            !state.selectedElement ||
            component.id !== state.selectedElement.id ||
            !component.expanded,
        };
      }
      return {
        ...component,
        expanded:
          payload.element && component.id === payload.element.id
            ? component.expanded === undefined || component.expanded
            : component.expanded,
      };
    }),
    selectedElement: payload.element
      ? {
          ...payload.element,
        }
      : false,
  };
}

function removeElement(
  state: ComponentStateType,
  payload: RemoveComponentPayloadType
): ComponentStateType {
  return {
    ...state,
    components: state.components.filter(
      (component) => component.id !== payload.element.id
    ),
  };
}
