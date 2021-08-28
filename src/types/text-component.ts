import { BaseComponent } from ".";
import { ComponentsEnum } from "../enums";

export interface TextComponent extends BaseComponent {
  type: ComponentsEnum.TEXT_COMPONENT;
  value: string;
  fontSize: string;
  fontWeight: string;
  color: string;
}
