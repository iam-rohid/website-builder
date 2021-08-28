import { ComponentType } from "../../types";

export type ComponentStateType = {
  components: ComponentType[];
  selectedElement: ComponentType | false;
  html: string;
  css: string;
  js: string;
};

export enum ComponentActionTypes {
  ADD_COMPONENT = "ADD_COMPONENT",
  UPDATE_COMPONENT = "UPDATE_COMPONENT",
  REMOVE_COMPONENT = "REMOVE_COMPONENT",
  CHANGE_SELECTED_COMPONENT = "CHANGE_SELECTED_COMPONENT",
}
