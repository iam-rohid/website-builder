import { BaseComponent } from ".";
import {
  AlignItemsEnum,
  ComponentsEnum,
  FlexDirectionEnum,
  FlexWarpEnum,
  JustifyContentEnum,
} from "../enums";

export interface FlexComponent extends BaseComponent {
  type: ComponentsEnum.FLEX_COMPONENT;
  flexDirection: FlexDirectionEnum;
  flexWarp: FlexWarpEnum;
  justifyContent: JustifyContentEnum;
  alignItems: AlignItemsEnum;
}
