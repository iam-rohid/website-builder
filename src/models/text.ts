import Element from "./element";
export const textTags: { name: string; tag: string }[] = [
  { name: "P", tag: "p" },
  { name: "H1", tag: "h1" },
  { name: "H2", tag: "h2" },
  { name: "H3", tag: "h3" },
  { name: "H4", tag: "h4" },
  { name: "H5", tag: "h5" },
  { name: "H6", tag: "h6" },
  { name: "Span", tag: "span" },
];

export default class Text extends Element {
  fontSize: number | "inherit" = "inherit";
  fontWeight: "Thin" | "Light" | "Normal" | "Medium" | "Bold" | "Black" =
    "Normal";
  color: { r: string; g: string; b: string; a: string } | "inherit" = "inherit";
  value: string;
  constructor() {
    super(textTags[0].tag, "Text");
    this.canHaveChildren = false;
    this.display = "inline-block";
    this.value =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }

  getStyles(): [string, string][] {
    return [
      ...super.getStyles(),
      [
        "font-size",
        `${
          this.fontSize === "inherit" ? this.fontSize : this.fontSize + "rem"
        }`,
      ],
      [
        "font-weight",
        `${
          this.fontWeight === "Thin"
            ? 200
            : this.fontWeight === "Light"
            ? 300
            : this.fontWeight === "Normal"
            ? 400
            : this.fontWeight === "Medium"
            ? 600
            : this.fontWeight === "Bold"
            ? 700
            : 900
        }`,
      ],
      [
        "color",
        `${
          this.color === "inherit"
            ? "inherit"
            : `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`
        }`,
      ],
    ];
  }
  getHtml(): string {
    return this.getTag(this.value);
  }
}
