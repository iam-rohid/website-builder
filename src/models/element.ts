import marginInterface from "../interfaces/margin";
import paddingInterface from "../interfaces/padding";
import { heightType, widthType } from "../types/cssTypes";

export default class Element {
  uid: string;
  parentId: string | null;
  name: string;
  tag: string;
  canHaveChildren: boolean = true;

  display: "none" | "block" | "inline-block" | "flex" | "grid" = "block";
  margin: marginInterface = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };
  padding: paddingInterface = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };
  width: widthType = "full";
  height: heightType = "auto";
  backgroundColor:
    | { r: string; g: string; b: string; a: string }
    | "transparent" = "transparent";
  opacity: number = 100;
  id?: string;
  classes?: string[];
  selected?: boolean;

  constructor(tag: string, name: string) {
    this.uid = Math.random().toString().slice(2);
    this.parentId = null;
    this.tag = tag;
    this.name = name;
  }

  getChildren(elements: Element[]): string {
    let childs: Element[] = elements.filter(
      (elem) => elem.parentId === this.uid
    );
    return `${childs
      .map((child) =>
        typeof child === "string"
          ? child
          : child.getHtml(elements.filter((elem) => elem.parentId !== this.uid))
      )
      .join("")}`;
  }

  getStyles(): [string, string][] {
    return [
      ["display", this.display],
      ["outline", `${this.selected ? "1px solid blue" : "none"}`],
      [
        "background-color",
        `${
          this.backgroundColor === "transparent"
            ? "transparent"
            : `rgba(${this.backgroundColor.r}, ${this.backgroundColor.g}, ${this.backgroundColor.b}, ${this.backgroundColor.a})`
        }`,
      ],
      ["opacity", `${this.opacity * 0.01}`],
      [
        "padding",
        `${this.padding.top}px ${this.padding.right}px ${this.padding.bottom}px ${this.padding.left}px`,
      ],
      [
        "margin",
        `${this.margin.top}px ${this.margin.right}px ${this.margin.bottom}px ${this.margin.left}px`,
      ],
      [
        "width",
        `${
          this.width === "auto"
            ? "auto"
            : this.width === "full"
            ? "100%"
            : this.width === "screen"
            ? "100vw"
            : this.width + "px"
        }`,
      ],
      [
        "height",
        `${
          this.height === "auto"
            ? "auto"
            : this.height === "full"
            ? "100%"
            : this.height === "screen"
            ? "100vh"
            : this.width + "px"
        }`,
      ],
    ];
  }

  getTag(children: string): string {
    return `<${this.tag} style="${this.getStyles()
      .map((style) => `${style[0]}: ${style[1]};`)
      .join(" ")}" ${this.id ? `id="${this.id}"` : ""} ${
      this.classes ? `class="${this.classes.join(" ")}"` : ""
    }>
    ${children}
  </${this.tag}>`;
  }

  getHtml(elements: Element[]): string {
    return this.getTag(this.getChildren(elements));
  }
}
