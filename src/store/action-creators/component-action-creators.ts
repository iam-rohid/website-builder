import { Dispatch } from "redux";
import {
  ComponentActionTypes,
  AddComponentPayloadType,
  ComponentAction,
  RemoveComponentPayloadType,
  SelectedComponentPayloadType,
  UpdateComponentPayloadType,
} from "..";

export const AddComponent = (payload: AddComponentPayloadType) => {
  return (dispatch: Dispatch<ComponentAction>) => {
    dispatch({
      type: ComponentActionTypes.ADD_COMPONENT,
      payload: payload,
    });
  };
};

export const UpdateComponent = (payload: UpdateComponentPayloadType) => {
  return (dispatch: Dispatch<ComponentAction>) => {
    dispatch({
      type: ComponentActionTypes.UPDATE_COMPONENT,
      payload: payload,
    });
  };
};

export const RemoveComponent = (payload: RemoveComponentPayloadType) => {
  return (dispatch: Dispatch<ComponentAction>) => {
    dispatch({
      type: ComponentActionTypes.REMOVE_COMPONENT,
      payload: payload,
    });
  };
};

export const ChangeSelectdComponent = (
  payload: SelectedComponentPayloadType
) => {
  return (dispatch: Dispatch<ComponentAction>) => {
    dispatch({
      type: ComponentActionTypes.CHANGE_SELECTED_COMPONENT,
      payload: payload,
    });
  };
};
