import { Dispatch } from "redux";
import {
  ElementActionTypes,
  AddElementPayloadType,
  ElementAction,
  RemoveElementPayloadType,
  SelectedElementPayloadType,
} from "../";

export const AddElement = (payload: AddElementPayloadType) => {
  return (dispatch: Dispatch<ElementAction>) => {
    dispatch({
      type: ElementActionTypes.ADD_ELEMENT,
      payload: payload,
    });
  };
};

export const RemoveElement = (payload: RemoveElementPayloadType) => {
  return (dispatch: Dispatch<ElementAction>) => {
    dispatch({
      type: ElementActionTypes.REMOVE_ELEMENT,
      payload: payload,
    });
  };
};

export const ChangeSelectdElement = (payload: SelectedElementPayloadType) => {
  return (dispatch: Dispatch<ElementAction>) => {
    dispatch({
      type: ElementActionTypes.CHANGE_SELECTED_ELEMENT,
      payload: payload,
    });
  };
};
