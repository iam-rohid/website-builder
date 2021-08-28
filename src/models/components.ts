import UUIDGenerator from "../lib/UUIDGenerator";
import {
  AlignItemsEnum,
  ComponentsEnum,
  FlexDirectionEnum,
  FlexWarpEnum,
  JustifyContentEnum,
} from "../enums";
import { ComponentType } from "../types";

export const getFlexComponent = (): ComponentType => ({
  type: ComponentsEnum.FLEX_COMPONENT,
  id: UUIDGenerator(),
  parentId: false,
  name: "Flex",
  tag: "div",
  flexDirection: FlexDirectionEnum.FlexRow,
  flexWarp: FlexWarpEnum.FlexWarp,
  justifyContent: JustifyContentEnum.JustifyCenter,
  alignItems: AlignItemsEnum.ItemsCenter,
});

export const getTextComponent = (): ComponentType => ({
  type: ComponentsEnum.TEXT_COMPONENT,
  id: UUIDGenerator(),
  parentId: false,
  name: "Text",
  tag: "p",
  value: "Text",
  fontSize: "text-base",
  fontWeight: "font-normal",
  color: "text-gray-900",
});
