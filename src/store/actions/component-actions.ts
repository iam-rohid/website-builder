import { ComponentType } from "../../types";
import { ComponentActionTypes } from "..";

export type AddComponentPayloadType = {
  element: ComponentType;
  parentId: string | false;
};
export type RemoveComponentPayloadType = {
  element: ComponentType;
};
export type SelectedComponentPayloadType = {
  element: ComponentType | false;
};
export type UpdateComponentPayloadType = {
  element: ComponentType;
};

type AddComponentType = {
  type: ComponentActionTypes.ADD_COMPONENT;
  payload: AddComponentPayloadType;
};

type UpdateComponent = {
  type: ComponentActionTypes.UPDATE_COMPONENT;
  payload: UpdateComponentPayloadType;
};

type RemoveComponentType = {
  type: ComponentActionTypes.REMOVE_COMPONENT;
  payload: {
    element: ComponentType;
  };
};

type SelectComponentType = {
  type: ComponentActionTypes.CHANGE_SELECTED_COMPONENT;
  payload: {
    element: ComponentType | false;
  };
};

export type ComponentAction =
  | AddComponentType
  | RemoveComponentType
  | SelectComponentType
  | UpdateComponent;
