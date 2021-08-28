import UUIDGenerator from "../lib/UUIDGenerator";

export enum ElementType {
  Container,
  Text,
  InputField,
}

export default class HTMLElement {
  uuid: string;
  elementType: ElementType;
  parentUUID: string | false;
  name: string;
  id?: string; // HTMl ID
  tag: string; // HTML Tag
  classes?: string[]; // HTML Element Class
  canContainChild: boolean;
  expanded?: boolean;
  constructor(
    name: string,
    tag: string,
    canContainChild: boolean,
    classes?: string[],
    id?: string,
    elementType?: ElementType
  ) {
    this.uuid = UUIDGenerator();
    this.name = name;
    this.tag = tag;
    this.canContainChild = canContainChild;
    this.classes = classes;
    this.id = id;
    this.elementType = elementType || ElementType.Container;
    this.parentUUID = false;
  }
}

export const div = () => {
  return new HTMLElement("Div", "div", true);
};
export const section = new HTMLElement("Section", "div", true);
export const container = new HTMLElement("Container", "div", true, [
  "container px-4 mx-auto max-w-7xl",
]);
