import Element from "./element";
export default class Text extends Element {
  value: string;
  constructor() {
    super("p", "Text");
    this.canHaveChildren = false;
    this.value =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }

  getHtml(): string {
    return this.getTag(this.value);
  }
}
